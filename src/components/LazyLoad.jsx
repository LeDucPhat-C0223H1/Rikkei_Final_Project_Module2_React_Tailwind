import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";

const LazyLoad = (importFunc) => {
  // const LazyComponent = lazy(importFunc);
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1000);
    });
  });
  // eslint-disable-next-line react/display-name
  return (props) => (
    <>
      <Suspense fallback={<Loader />}>
        <LazyComponent {...props} />
      </Suspense>
    </>
  );
};

export default LazyLoad;
