import { useState } from 'react';
import { Button } from './ui/button';
import { FieldLabel } from './ui/field';
import { Input } from './ui/input';

const CreateWishForm = () => {
  const [wishData, setWishData] = useState({
    name: '',
    age: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value, e.target.age.value);
    if (!wishData.name.trim() || !wishData.age) return;

    setWishData({
      name: e.target.name.value,
      age: e.target.age.value,
    });
    console.log('Wish Created:', wishData);
  };

  const isValid =
    wishData.name.trim() &&
    wishData.age &&
    Number(wishData.age) >= 1 &&
    Number(wishData.age) <= 100;

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2 mt-4">
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          placeholder="Enter the name of the birthday person"
          type="text"
          value={wishData.name}
          onChange={(e) => setWishData({ ...wishData, name: e.target.value })}
        />
      </div>
      <div className="space-y-2 mt-4">
        <FieldLabel htmlFor="age">Age</FieldLabel>
        <Input
          id="age"
          placeholder="Enter the age of the birthday person"
          type="number"
          value={wishData.age}
          onChange={(e) =>
            setWishData({
              ...wishData,
              age: e.target.value ? Number(e.target.value) : '',
            })
          }
        />
      </div>

      <Button
        type="submit"
        className="mt-6 w-full"
        variant="outline"
        size="lg"
        disabled={!isValid}
      >
        Create Wish
      </Button>
    </form>
  );
};

export default CreateWishForm;
