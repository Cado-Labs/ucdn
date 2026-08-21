import path from "path"
import fs from "fs"
import yaml from "js-yaml"

const isENOENT = error => error.code === "ENOENT"

const loadYamlFile = (filePath, { optional }) => {
  try {
    const configPath = path.resolve(filePath)
    const content = fs.readFileSync(configPath)
    return yaml.load(content)
  } catch (error) {
    if (optional && isENOENT(error)) return null
    throw error
  }
}

export default {
  loadYamlFile,
}
