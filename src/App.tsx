import React, { memo } from 'react'
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  PanelHeader,
} from "@mntm/vkui";
import MainPanel from './panels/MainPanel';

const App = memo(() => {
  const { viewWidth } = useAdaptivity();

  return <AppRoot>
    <SplitLayout header={<PanelHeader separator={false} />}>
      <SplitCol spaced={(viewWidth || ViewWidth.DESKTOP) > ViewWidth.MOBILE}>
        <View activePanel="main">
          <MainPanel id="main" />
        </View>
      </SplitCol>
    </SplitLayout>
  </AppRoot>
});

export default App;
