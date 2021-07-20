const htmlTemplate = (options) => {
  const {content} = options

  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Html Template</title>
</head>
<style type="text/css">
    * {
        box-sizing: border-box;
    }
    .title{
        font-size: 40px;
        line-height: 49px;
        border-bottom: 1px #999999 solid;
        padding-bottom: 10px;
        margin: 10px 0;
    }
    table {
        padding-top: 38px;
        padding-bottom: 40px;
        width: 100%;
        word-break: break-word;
        border-collapse:separate;
        border-spacing:2px 2px;
    }
    table tr td:first-child {
        width: 10em;
    }
    table th,
    table tr td {
        height: 38px;
        padding: 0 4px;

    }

    .td-detail {
        background-color: #f0f0f0;
        text-align: center;
    }
    .seal-img {
        height: 60px;
        vertical-align: middle;
    }

    html,
    body {
        font-family: "宋体";
        font-size: 14px;
        margin: 0;
    }
</style>
<body>
${content}
</body>
</html>
  `
}

module.exports = htmlTemplate
