import { Link, useParams } from "react-router-dom";
import { newsData } from "../../constants/News/NewsData";
import Layout from "../../layout/Layout";

const Singlenews = () => {
  const { id } = useParams();

  const singleNews = newsData.filter((item) => {
    return item.id == Number(id);
  });

  return (
    <Layout>
      <div className="flex 
      sm:w-full md:w-full px-4 lg:w-3/4 xl:w-4/5
       py-16 items-center justify-center">
        <div key={singleNews[0].id} className="tracking-wider flex flex-col">
          <p className="xl:text-3xl mt-2 mb-10 lg:text-3xl md:text-xl text-justify sm:text-xl font-semibold xl:px-4 lg:px-4 md:px-4 sm:px-0">
          {singleNews[0].title}
          </p>
          <img
            src={singleNews[0].img}
            className="w-full h-[500px] object-contain mb-3"
            alt={`the image about ${singleNews[0].title}`}
          />
          <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-semibold my-5 xl:px-4 lg:px-4 md:px-4 sm:px-0">
            {" "}
            {singleNews[0].title}
          </p>
          <p className="xl:text-lg lg:text-lg text-justify md:text-lg sm:text-base xl:px-4 lg:px-4 md:px-4 sm:px-0 leading-[30px]">
            {" "}
            {singleNews[0].description}
          </p>
          <p className="xl:px-4 lg:px-4 md:px-4 sm:px-0 leading-[30px] mt-3">
            <Link
              to={`/xeberler`}
              className="bg-[#067E45] text-white px-6 inline-block py-3 mt-4 rounded"
            >
              Geri dön
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Singlenews;
