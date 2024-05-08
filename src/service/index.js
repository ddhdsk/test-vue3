import request from "./request";

// 获取首页数据
export const getHomePageData = () => request.get("/homepage/block/page");
// 获取首页菜单图标
export const getDragonball = () => request.post("/homepage/dragon/ball");
// 获取推荐歌单
export const getPersonalized = () => request.get("/personalized?limit=8");
// 数字专辑-新碟上架
export const getAlbumList = () => request.get("/album/list?limit=12&offset=36");
