import { assign, boolean, integer, object, optional, string } from "superstruct";
import { LovelaceCardConfig } from "../../ha";
import { ActionsSharedConfig, actionsSharedConfigStruct } from "../../shared/config/actions-config";
import {
    AppearanceSharedConfig,
    appearanceSharedConfigStruct,
} from "../../shared/config/appearance-config";
import { EntitySharedConfig, entitySharedConfigStruct } from "../../shared/config/entity-config";
import { lovelaceCardConfigStruct } from "../../shared/config/lovelace-card-config";

export type LightCardConfig = LovelaceCardConfig &
    EntitySharedConfig &
    AppearanceSharedConfig &
    ActionsSharedConfig & {
        icon_color?: string;
        show_brightness_control?: boolean;
        show_color_temp_control?: boolean;
        show_color_control?: boolean;
        collapsible_controls?: boolean;
        use_light_color?: boolean;
        min_brightness?: number;
        max_brightness?: number;
    };

export const lightCardConfigStruct = assign(
    lovelaceCardConfigStruct,
    assign(entitySharedConfigStruct, appearanceSharedConfigStruct, actionsSharedConfigStruct),
    object({
        icon_color: optional(string()),
        show_brightness_control: optional(boolean()),
        show_color_temp_control: optional(boolean()),
        show_color_control: optional(boolean()),
        collapsible_controls: optional(boolean()),
        use_light_color: optional(boolean()),
        min_brightness: optional(integer()),
        max_brightness: optional(integer()),
    })
);
