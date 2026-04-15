import { util } from "replugged";
import { Clickable, Select, Stack, Switch, Text } from "replugged/components";
import { EmbedServices, cfg } from "./config";

export function Settings(): React.ReactElement {
  return (
    <Stack gap={24}>
      <Text.H1>Replace</Text.H1>
      <Switch
        {...{
          label: "On send",
          description: "Replaces the twitter link on send.",
          ...util.useSetting(cfg, "send", true),
        }}
      />
      <Switch
        {...{
          label: "On edit",
          description: "Replaces the twitter link on edit.",
          ...util.useSetting(cfg, "edit", true),
        }}
      />
      <Switch
        {...{
          label: "Https",
          description: "Automatically replace http with https.",
          ...util.useSetting(cfg, "https", true),
        }}
      />
      <Select
        {...{
          label: "Embed Service",
          options: [
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
            {
              label: "XCunny",
              value: EmbedServices.XCunny,
            },
          ],
          ...util.useSetting(cfg, "service", EmbedServices.FxTwitter),
        }}
      />
      <Clickable
        onClick={() =>
          window.open("https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html")
        }>
        {<Text.H2>♪(^∇^*)</Text.H2>}
      </Clickable>
    </Stack>
  );
}
