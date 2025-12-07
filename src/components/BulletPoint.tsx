const BulletPoint: React.FC<{
  index: number;
  title: string;
  description?: string;
}> = ({ index, title, description }) => {
  return (
    <div>
      <p className="p-1">
        <strong>{index + ". " + title}</strong>
      </p>
      <p>{description}</p>
      <div className="h-3" />
    </div>
  );
};

export default BulletPoint;
