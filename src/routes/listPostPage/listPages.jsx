import "./listPage.scss";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map"; 
import { Await } from "react-router-dom";
import { listData } from "../../lib/dummydata";

// Simulate async fetching for future database integration
// function fetchListData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(listData);
//     }, 500); // simulate network delay
//   });
// }

function ListPage() {
  // const dataPromise = fetchListData(); // returns a promise
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {/* <Suspense fallback={<p>Loading posts...</p>}> */}
          {/* <Await
              resolve={dataPromise}
              errorElement={<p>Error loading posts!</p>}
            > */}
          {/* {(postResponse) =>
                postResponse.map((post) => <Card key={post.id} item={post} />)
              } */}
          {data.map((post) => (
            <Card key={post.id} item={post} />
          ))}
          {/* </Await> */}
          {/* </Suspense> */}
        </div>
      </div>

      <div className="mapContainer">
        {/* <Suspense fallback={<p>Loading map...</p>}>
          <Await
            resolve={dataPromise}
            errorElement={<p>Error loading map data!</p>}
          > */}
        {/* {(postResponse) => <Map items={postResponse} />} */}
        <Map items={data} />
        {/* </Await>
        </Suspense> */}
      </div>
    </div>
  );
}

export default ListPage;
