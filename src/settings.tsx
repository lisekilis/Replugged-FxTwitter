import { components, settings, util } from "replugged";
import { Select } from "replugged/dist/renderer/modules/components";
import { EmbedServices } from "./types";

const { Clickable, Switch, Text } = components;

const cfg = settings.init("dev.lisekilis.RepluggedFxTwitter");

export function Settings(): React.ReactElement {
  return (
    <>
      <Text.H1>Replace</Text.H1>
      <Switch
        {...{
          label: "On send",
          note: "Replaces the twitter link on send.",
          ...util.useSetting(cfg, "send", true),
        }}></Switch>
      <Switch
        {...{
          label: "On edit",
          note: "Replaces the twitter link on edit.",
          ...util.useSetting(cfg, "edit", true),
        }}></Switch>
      <Select
        {...{
          label: " Embed Service",
          ...util.useSetting(cfg, "service", EmbedServices.FxTwitter),
        }}
        options={[
          {
            label: "FxTwitter",
            value: EmbedServices.FxTwitter,
          },
          {
            label: "FixupX",
            value: EmbedServices.FixupX,
          },
          {
            label: "VXTwitter",
            value: EmbedServices.VXTwitter,
          },
          {
            label: "GirlCockX",
            value: EmbedServices.GirlCockX,
          },
          {
            label: "StupidPenisx",
            value: EmbedServices.StupidPenisx,
          },
        ]}
      />
      <Clickable
        onClick={() =>
          window.open("https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html")
        }>
        {<Text.H2>♪(^∇^*)</Text.H2>}
      </Clickable>
    </>
  );
}
