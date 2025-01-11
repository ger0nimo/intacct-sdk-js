/**
 * @module Intacct/SDK/Functions/InventoryControl
 */

/**
 * Copyright 2020 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractItemCycleCount from "./AbstractItemCycleCount";

export default class ItemCycleCountCreate extends AbstractItemCycleCount {
    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("ICCYCLECOUNT");
        xml.writeElement("CYCLECOUNTDESC", this.cyclecountDesc);
        xml.writeElement("WAREHOUSEID", this.warehouseId);
        xml.writeElement("EMPUSERID", this.editedBy);
        xml.writeElement("SHOWQTYONHAND", this.showQtyOnHand);
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // ICCYCLECOUNT
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
