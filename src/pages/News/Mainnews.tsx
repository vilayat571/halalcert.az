import { Link } from "react-router-dom";
import CoverNews from "../../components/News/CoverNews";
import { newsData } from "../../constants/News/NewsData";
import Layout from "../../layout/Layout";

const Mainnews = () => {
  const data = newsData;

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <CoverNews />
        <div className="flex flex-col w-full items-center py-16">
          <p className="text-3xl mb-8 text-center">- Ən son xəbərlər -</p>
          <div
            className="
        grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4
         xl:px-40 lg:px-40 md:px-12 sm:px-6 
             xl:w-3/4 lg:w-full md:w-full sm:w-full "
          >
            {data.map((item) => {
              return (
                <div key={item.id} className="col-span-1 flex flex-col">
                  <img
                    src={item.img}
                    className="w-[360px] h-[200px] object-cover rounded-lg mb-3"
                    alt={`the image about ${item.title}`}
                  />
                  <p className="text-base font-semibold mb-2 mt-3">
                    {" "}
                    {item.title}
                  </p>
                  <p className="text-base line-clamp-4"> {item.description}</p>
                  <p className="text-sm line-clamp-2">
                    <Link
                      to={`/xeberler/${item.id}`}
                      className="bg-[#067E45] text-white px-4 inline-block py-3 mt-4 rounded"
                    >
                      Daha çox oxu
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mainnews;
