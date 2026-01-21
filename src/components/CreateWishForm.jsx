import { Button } from './ui/button';
import { FieldLabel } from './ui/field';
import { Input } from './ui/input';

const CreateWishForm = () => {
  return (
    <form>
      <div className="space-y-2 mt-4">
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          placeholder="Enter the name of the birthday person"
          type="text"
        />
      </div>
      <div className="space-y-2 mt-4">
        <FieldLabel htmlFor="age">Age</FieldLabel>
        <Input
          id="age"
          placeholder="Enter the age of the birthday person"
          type="number"
        />
      </div>

      <Button type="submit" className="mt-6 w-full" variant="outline" size="lg">
        Create Wish
      </Button>
    </form>
  );
};

export default CreateWishForm;
