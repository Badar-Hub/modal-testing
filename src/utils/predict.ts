// Language: typescript
// Path: react-next\utils\predict.ts
import { getImageTensorFromPath } from "./imageHelper";
import { runSqueezenetModel } from "./modelHelper";

export async function inferenceSqueezenet(path: string) {
  // 1. Convert image to tensor
  const imageTensor = await getImageTensorFromPath(path);
  console.log(imageTensor);

  // 2. Run model
  const [predictions, inferenceTime] = await runSqueezenetModel(imageTensor);
  // 3. Return predictions and the amount of time it took to inference.
  return [predictions, inferenceTime];
}
