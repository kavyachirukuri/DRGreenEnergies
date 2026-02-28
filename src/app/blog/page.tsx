const posts = [
  {
    title: "How to Read Your Solar Proposal",
    category: "Buying Guide",
    description:
      "Key parameters to check in any solar proposal – from kW size and generation guarantees to warranties and service terms.",
  },
  {
    title: "Rooftop Solar Myths vs Reality",
    category: "Education",
    description:
      "Clarifying common misconceptions around rooftop solar safety, reliability, maintenance and performance.",
  },
  {
    title: "Understanding Net Metering & Billing",
    category: "Policy & Process",
    description:
      "An overview of how net metering works, what shows up on your bill and how savings are calculated.",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">
          Blog & Resources
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Short, practical resources to help you understand solar technology,
          regulations and financials so you can make confident decisions.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                {post.category}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {post.description}
              </p>
            </div>
            <p className="mt-4 text-xs font-semibold text-amber-500">
              Coming soon
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

