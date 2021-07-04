import React, { memo } from "react";
import {
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell
} from "@mntm/vkui";

interface MainPanelProps {
    id: string;
}
  
const MainPanel = memo<MainPanelProps>(props => {
    return <Panel id={props.id}>
    <PanelHeader>VKUI</PanelHeader>
    <Group header={<Header mode="secondary">Items</Header>}>
      <SimpleCell>Hello</SimpleCell>
      <SimpleCell>World</SimpleCell>
    </Group>
  </Panel>
});

export default MainPanel;
