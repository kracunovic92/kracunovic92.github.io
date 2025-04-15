import TagBadge from "../../components/TagBadge";

type Props = {
    title: string;
    date: string;
    tags?: string[];
    children: React.ReactNode;
  };
  
  const PostLayout = ({ title, date, tags = [], children }: Props) => (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <header className="mb-8 border-b border-gray-300 dark:border-gray-700 pb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-gray-900 dark:text-white">
          {title}
        </h1>
  
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <span>
            📅 {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TagBadge key={tag} label={tag} />
              ))}
            </div>
          )}
        </div>
      </header>
  
      {/* Post content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
  
  export default PostLayout;
  