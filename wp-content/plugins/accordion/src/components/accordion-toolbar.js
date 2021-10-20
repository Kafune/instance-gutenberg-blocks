import { Toolbar, ToolbarButton } from "@wordpress/components";
import { formatBold, formatItalic, link } from '@wordpress/icons';

export default function AccordionToolbar(props) {
    return (
        <Toolbar label="Text styling">
            <ToolbarButton icon={ formatBold } label="Bold" />
            <ToolbarButton icon={ formatItalic } label="Italic" />
            <ToolbarButton icon={ link } label="Link" />
        </Toolbar>
    )
}