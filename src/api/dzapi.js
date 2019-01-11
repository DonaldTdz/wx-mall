import {
    wxRequest
  } from '@/utils/wxRequest';
  
  let env = "-test" //-dev 或者 -test
  const apiMall = 'http://localhost:21021/'
  
  //微信的jscode换取sessionKey
  const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/services/app/Wechat/GetJsCode2Session");//已替换
  
  //获取热售商品
  const getHeatGoods = (params) => wxRequest(params, apiMall + '/api/services/app/Good/GetHeatGoodsAsync');
  //获取商品分类
  const getGoodsCategories = (params) => wxRequest(params, apiMall + '/api/services/app/Category/GetGoodsCategoriesAsync');
  //商品搜索
  const getSearchGoods = (params) => wxRequest(params, apiMall + '/api/services/app/Good/GetSearchGoodsAsync');
  //商品分类
  const getGroupGoods = (params) => wxRequest(params, apiMall + '/api/services/app/Good/GetGroupGoodsAsync');

  //商品明细
  const getGoodsDetail = (params) => wxRequest(params, apiMall + '/api/services/app/Good/GetGoodsDetailAsync');

  //添加到购物车
  const addCart = (params) => wxRequest(params, apiMall + '/api/services/app/ShopCart/AddCartAsync');

  //用户购物车列表
  const getUserCartList = (params) => wxRequest(params, apiMall + '/api/services/app/ShopCart/GetUserCartListAsync');

  //检查购物车
  const getCheckCartGoods = (params) => wxRequest(params, apiMall + '/api/services/app/ShopCart/GetCheckCartGoodsAsync');
  
  export default {
    wxJsCode2Session,
    getHeatGoods,
    getGoodsCategories,
    getSearchGoods,
    getGroupGoods,
    getGoodsDetail,
    addCart,
    getUserCartList,
    getCheckCartGoods
  }
  