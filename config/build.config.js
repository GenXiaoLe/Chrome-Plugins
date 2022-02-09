// 重写manifest.json文件

const fs = require('fs')
const path = require('path')

const SOURCRFILES = []

function getSourceFiles (type) {
  // 获取目录路径
  const filesPath = path.join(__dirname, `../dist/${type}`)

  // 获取目录内容地址
  const files = fs.readdirSync(filesPath)

  files.forEach(file => {
    SOURCRFILES.push(
      {
        type,
        url: `/${type}/${file}`
      }
    )
  })
}


// 读取资源
getSourceFiles('js')

// 修改 manifest.json 内容
function formatMainFest() {
  // 修改 manifest.json 内容
  const mainfest = require('../public/manifest.json')

  // 遍历文件路径
  const files = SOURCRFILES.map(file => file.url)
  
  // 拼接json
  mainfest.web_accessible_resources = mainfest.web_accessible_resources.concat(files)

  // 格式化
  let result = ''
  try {
    result = JSON.stringify(mainfest, null, 2)
  } catch (error) {
    result = ''
  }

  // 写入文件
  fs.writeFileSync(path.join(__dirname, '../dist/manifest.json'), result)

  console.log('---------manifest.json重写完成---------')
}

formatMainFest()