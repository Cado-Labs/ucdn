import path from "path"
import fs from "fs"
import yaml from "js-yaml"

const loadYamlFile = filePath => {
  const configPath = path.resolve(filePath)

  if (!fs.existsSync(configPath)) {
    return null
  }

  const content = fs.readFileSync(configPath)
  return yaml.load(content)
}

export default {
  loadYamlFile,
}
