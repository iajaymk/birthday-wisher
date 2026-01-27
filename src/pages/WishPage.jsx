import { useSearchParams } from 'react-router-dom';

const WishPage = () => {
  const searchParams = useSearchParams();

  const name = searchParams[0].get('name').toUpperCase() || 'Friend';
  const age = searchParams[0].get('age') || 'unknown';

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden flex items-center justify-center p-6">
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold">
            Happy Birthday, {name}!
          </h1>

          <div className="text-6xl md:text-7xl font-bold">{age}</div>

          <div className="">
            <p>Cake has to be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishPage;
