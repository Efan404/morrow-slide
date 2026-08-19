import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const missionSource = await readFile(new URL('../components/LiveCareMission.vue', import.meta.url), 'utf8')
const unboxingSource = await readFile(new URL('../components/UnboxingScene.vue', import.meta.url), 'utf8')

test('reveals the problem before the instruction and work-order toast group', () => {
  const problemIndex = missionSource.indexOf('<p v-click class="care-mission__context">')
  const demoIndex = missionSource.indexOf('<div v-click class="care-mission__demo">')

  assert.notEqual(problemIndex, -1, 'the problem statement should be the first click reveal')
  assert.ok(demoIndex > problemIndex, 'the instruction and feed group should reveal after the problem')

  const demoMarkup = missionSource.slice(demoIndex, missionSource.indexOf('</template>'))
  assert.match(demoMarkup, />INSTRUCTION</)
  assert.match(demoMarkup, /<WorkOrderToast \/>/)
})

test('uses the interactive customer scenario copy', () => {
  assert.match(missionSource, />INTERACTIVE DEMO</)
  assert.match(missionSource, /现在，请把自己想象成一位/)
  assert.match(missionSource, /刚刚收到鼠标的<br \/>消费者。/)
  assert.match(missionSource, /但它出了点问题，你需要申请退换货。/)
})

test('keeps the nested product-box radii concentric', () => {
  assert.match(unboxingSource, /\.box-lid::after\s*\{[\s\S]*?inset: 0\.65rem;[\s\S]*?border-radius: 0\.85rem;/)
  assert.match(unboxingSource, /\.box-inlay\s*\{[\s\S]*?inset: 1\.05rem;[\s\S]*?border-radius: 0\.45rem;/)
})
