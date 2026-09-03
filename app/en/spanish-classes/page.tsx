import type { Metadata } from 'next';
import EnglishHomePage from '../page';

export const metadata: Metadata = {
  title: "Live Online Spanish Classes",
  description: "Learn Spanish live with real teachers. Conversational practice from day one.",
};

export default function SpanishClassesAliasPage() {
  return <EnglishHomePage />;
}
