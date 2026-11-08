import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import ReadingProgress from "@/components/blog/ReadingProgress";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — DHURTA Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = [
    post.excerpt,
    "At DHURTA, we treat this as a working principle rather than a talking point — every engagement is scoped around the specific market, culture, and constraints our client is operating within, not a one-size-fits-all playbook.",
    "The teams closest to a region are the ones making the calls in that region. That's not a nicety; it's how you avoid the expensive mistakes that come from designing in a vacuum and localizing as an afterthought.",
    "It's also why our delivery model is remote-first by design rather than by necessity — the best insight into a market usually comes from people who live in it.",
  ];

  return (
    <>
      <ReadingProgress />
      <article className="relative bg-navy pb-28 pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-light transition-colors hover:text-gold"
          >
            <ArrowLeft size={15} />
            Back to Insights
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs">
            <span className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-semibold uppercase tracking-widest text-gold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-light">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="text-gray-light/70">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          <div className="prose-invert mt-10 space-y-6 text-lg leading-relaxed text-gray-light">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl text-white" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="font-devanagari text-lg text-gold/70">
              धूर्तः — clever, global, trusted.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
