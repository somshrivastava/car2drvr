import React from "react";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";

const Search = () => {
  useEffect(() => {
    const year = "2024";
    const make = "Tesla";
    const model = "Model 3";
    axios
      .get(
        `https://customsearch.googleapis.com/customsearch/v1?q=${year}+${make}+${model}&cx=b6cadfc76acc7457f&key=AIzaSyDoARmjCcPX9zXjVZGm57uIEqK3JXko5mw&searchType=image`
      )
      .then((res) => {
        setResult(res.data.items[1].image.thumbnailLink);
      });
  }, []);

  return (
    <>
      <TopNav />
      <div className="rspanel">
        <h1>Reverse Search [to be implemented]</h1>
      </div>
      <img src={result} alt="new" />
      <Footer />
    </>
  );
};

export default Search;
