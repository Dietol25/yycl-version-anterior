import os
from PIL import Image
import numpy as np
from collections import deque

def remove_outer_white_background(image_path, tolerance=20):
    try:
        img = Image.open(image_path).convert('RGBA')
        width, height = img.size
        pixels = img.load()
        
        visited = np.zeros((height, width), dtype=bool)
        queue = deque()
        
        def is_bg_white(r, g, b, a):
            if a == 0:
                return True
            return r >= (255 - tolerance) and g >= (255 - tolerance) and b >= (255 - tolerance)
        
        # Border pixels
        for x in range(width):
            for y in [0, height - 1]:
                r, g, b, a = pixels[x, y]
                if is_bg_white(r, g, b, a) and not visited[y, x]:
                    visited[y, x] = True
                    queue.append((x, y))
                    
        for y in range(height):
            for x in [0, width - 1]:
                r, g, b, a = pixels[x, y]
                if is_bg_white(r, g, b, a) and not visited[y, x]:
                    visited[y, x] = True
                    queue.append((x, y))
                    
        while queue:
            cx, cy = queue.popleft()
            r, g, b, _ = pixels[cx, cy]
            pixels[cx, cy] = (r, g, b, 0)
            
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height and not visited[ny, nx]:
                    nr, ng, nb, na = pixels[nx, ny]
                    if is_bg_white(nr, ng, nb, na):
                        visited[ny, nx] = True
                        queue.append((nx, ny))
                        
        img.save(image_path, 'PNG')
        print(f"Processed: {image_path}")
    except Exception as e:
        print(f"Error on {image_path}: {e}")

assets_dir = 'public/assets'
for root, dirs, files in os.walk(assets_dir):
    for f in files:
        if f.lower().endswith('.png') and f.lower() != 'logo.png':
            full_path = os.path.join(root, f)
            remove_outer_white_background(full_path)

print("All asset illustrations processed with transparent alpha background.")
