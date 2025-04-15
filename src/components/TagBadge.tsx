
type TagBadgeProps = {
  label: string;
};

const TagBadge = ({ label }: TagBadgeProps) => (
  <span
    style={{
      display: 'inline-block',
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--accent)',
      color: 'var(--accent)',
      padding: '0.25rem 0.6rem',
      borderRadius: '999px',
      fontSize: '0.85rem',
      fontWeight: 500
    }}
  >
    #{label}
  </span>
);

export default TagBadge;