import { configureStore } from "@reduxjs/toolkit";
import SiteSlice from "../features/common/SiteSlice";

const combinedReducer = {
    site: SiteSlice,
};

export default configureStore({
  reducer: combinedReducer,
});