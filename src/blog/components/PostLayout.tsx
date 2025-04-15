import React from "react";
import TagBadge from "../../components/TagBadge";

type Props = {
  title: string;
  date: string;
  tags?: string[];
  children: React.ReactNode;
};

const PostLayout = ({ title, date, tags = [], children }: Props) => (
  <main
    style={{
      padding: "2rem 2rem",
      maxWidth: "1400px",
      margin: "0 auto",
      backgroundColor: "var(--card-bg)",
      borderRadius: "var(--border-radius)",
      boxShadow: "0 0 8px var(--card-shadow)",
    }}
  >
    {/* Header */}
    <header style={{ borderBottom: "1px solid var(--card-shadow)", paddingBottom: "1rem", marginBottom: "2rem" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "var(--fg)",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.9rem", color: "var(--fg)" }}>
        <span>
          📅{" "}
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </header>

    {/* Post content */}
    <article
      style={{
        color: "var(--fg)",
        fontSize: "1.05rem",
        lineHeight: 1.7,
        fontFamily: "var(--font-main)",
      }}
    >
      {children}
    </article>
  </main>
);

export default PostLayout;
