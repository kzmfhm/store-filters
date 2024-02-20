import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Myntra" title="Myntra" />
          <Button
            onClickHandler={handleClick}
            value="Almirah"
            title="Almirah"
          />

          <Button onClickHandler={handleClick} value="Laura" title="Laura" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
