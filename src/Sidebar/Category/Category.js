import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="men"
          title="Men"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="women"
          title="Women"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="kids"
          title="Kids"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="beauty"
          title="Beauty"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="home & living"
          title="Home & Living"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
