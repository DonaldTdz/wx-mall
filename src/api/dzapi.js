import {
    wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'http://localhost:21021/'

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/services/app/Wechat/GetJsCode2Session"); //已替换

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

const userShopCartDelete = (params) => wxRequest(params, apiMall + '/api/services/app/ShopCart/UserShopCartDeleteAsync');

//购物车去结算
const payOrderConfirm = (params) => wxRequest(params, apiMall + '/api/services/app/ShopCart/PayOrderConfirmAsync');

//获取结算明细
const getPayOrder = (params) => wxRequest(params, apiMall + '/api/services/app/ShopCart/GetPayOrderAsync');

//支付订单
const saveOrder = (params) => wxRequest(params, apiMall + '/api/services/app/Order/SaveOrderAsync');

//签到
const signIn = (params) => wxRequest(params, apiMall + '/api/services/app/IntegralDetail/SignInAsync');
//检查是否签到
const getUserTodayIsSignIn = (params) => wxRequest(params, apiMall + '/api/services/app/IntegralDetail/GetUserTodayIsSignIn');
//获取签到列表
const getUserSignInList = (params) => wxRequest(params, apiMall + '/api/services/app/IntegralDetail/GetIntegralDetailListAsync');
//我的积分
const getIntegralAllList = (params) => wxRequest(params, apiMall + '/api/services/app/IntegralDetail/GetIntegralAllListAsync');
//获取用户总积分
const getUserIntegralTotal = (params) => wxRequest(params, apiMall + '/api/services/app/IntegralDetail/GetUserIntegralTotalAsync');
//注册手机号
const registerUser = (params) => wxRequest(params, apiMall + '/api/services/app/WechatUser/RegisterUserAsync');
//获取手机号
const getUserPhone = (params) => wxRequest(params, apiMall + '/api/services/app/WechatUser/GetUserPhoneAsync');
//保存收货地址
const saveAddress = (params) => wxRequest(params, apiMall + '/api/services/app/Delivery/WXCreateOrUpdate');
//收货地址列表
const getUserAddress = (params) => wxRequest(params, apiMall + '/api/services/app/Delivery/GetWxDeliveryListAsync');
//获取当前收货地址信息
const receiverInfoById = (params) => wxRequest(params, apiMall + '/api/services/app/Delivery/GetWxDeliveryByIdAsync');
//删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + '/api/services/app/Delivery/WXDelete');
//获取我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/services/app/Order/GetOrderListAsync');
//获取订单信息
const getOrderInfoById = (params) => wxRequest(params, apiMall + '/api/services/app/Order/GetOrderByIdAsync');
//获取订单详情
const getOrderDetailList = (params) => wxRequest(params, apiMall + '/api/services/app/OrderDetail/GetOrderDetailListByIdAsync');
//取消订单
const cancelOrderById = (params) => wxRequest(params, apiMall + '/api/services/app/Order/CancelOrderByIdAsync');
export default {
    wxJsCode2Session,
    getHeatGoods,
    getGoodsCategories,
    getSearchGoods,
    getGroupGoods,
    getGoodsDetail,
    addCart,
    getUserCartList,
    getCheckCartGoods,
    userShopCartDelete,
    signIn,
    getUserTodayIsSignIn,
    getUserSignInList,
    getIntegralAllList,
    getUserIntegralTotal,
    registerUser,
    getUserPhone,
    saveAddress,
    getUserAddress,
    receiverInfoById,
    delUserAddress,
    payOrderConfirm,
    getPayOrder,
    saveOrder,
    getMyOrderList,
    getOrderInfoById,
    getOrderDetailList,
    cancelOrderById,
}