import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Language', 'Go Language', 'Python Language'];
 
  return (
    <div>
      <Header title="Develop. Preview. Deliver!" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
 
      <LikeButton />
     
    </div>
  );
}