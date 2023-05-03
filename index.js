const dotenv = require('dotenv');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT;

const userRouter = require('./router/userRouter.js');
const employeeRouter = require('./router/employeeRouter.js');
const assetRouter = require('./router/assetsRouter.js');
const assetCategory = require('./router/assetCategoryRouter.js');
const stockView = require('./router/stockViewsRouter.js');
const AssetIssue = require('./router/assetIssueRouter.js');
const returnAsset = require('./router/returnAssetRouter.js');
const scrapAsset = require('./router/scrapAssetRouter.js');
const assetHistory = require('./router/assetHistoryRouter.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.listen(PORT);
console.log(`Connected to Port ${PORT}`);

app.use('/', userRouter);
app.use('/', employeeRouter);
app.use('/', assetRouter);
app.use('/', assetCategory);
app.use('/', stockView);
app.use('/', AssetIssue);
app.use('/', returnAsset);
app.use('/', scrapAsset);
app.use('/', assetHistory);

app.get('/', (req, res) => {
  res.send('APIi CHECK');
});
