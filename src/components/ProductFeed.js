import Product from "./Product";

const ProductFeed = ({ products }) => {
  // console.log(products);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ title, id, image, description, category, price }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              image={image}
              description={description}
              category={category}
              price={price}
            />
          );
        })}
      <img
        src="https://links.papareact.com/dyz"
        className="md:col-span-full mx-auto"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ title, id, image, description, category, price }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                image={image}
                description={description}
                category={category}
                price={price}
              />
            );
          })}
      </div>
      {products
        .slice(5, products.length)
        .map(({ title, id, image, description, category, price }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              image={image}
              description={description}
              category={category}
              price={price}
            />
          );
        })}
    </div>
  );
};

export default ProductFeed;
