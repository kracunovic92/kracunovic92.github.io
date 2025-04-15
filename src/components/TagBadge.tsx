
type TagBadgeProps = {
    label: string;
  };
  
  const TagBadge = ({ label }: TagBadgeProps) => {
    return (
      <button

        type="button"
        className="flex items-center gap-1 rounded-full px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 ring-2 ring-blue-400 dark:ring-blue-500 shadow-sm hover:bg-blue-100 dark:hover:bg-blue-800 transition-all"

      >
        <span className="text-sm font-medium">#{label}</span>
      </button>
    );
  };
  
  export default TagBadge;
  