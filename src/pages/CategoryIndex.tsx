import CategoryList from "../components/CategoryList";

function CategoryIndex() {
  return (
    <div className="py-12">
      <h1 className="text-center mb-8 text-4xl font-bold">
        Category <span className="theme-text">List</span>
      </h1>
      <CategoryList />
    </div>
  );
}

export default CategoryIndex;
