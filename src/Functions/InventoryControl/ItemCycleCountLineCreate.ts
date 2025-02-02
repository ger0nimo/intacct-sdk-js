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
import AbstractItemCycleCountLine from "./AbstractItemCycleCountLine";

export default class ItemCycleCountLineCreate extends AbstractItemCycleCountLine {
    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("create");
        xml.writeStartElement("ICCYCLECOUNTENTRY");
        xml.writeElement("CYCLECOUNTKEY", this.cyclecountkey);
        xml.writeElement("ITEMID", this.itemId);
        xml.writeElement("ADJUSTMENTREASON", this.adjustmentReason);
        xml.writeElement("QUANTITYCOUNTED", this.countedQuantity);
        xml.writeElement("QUANTITYDAMAGED", this.damageQuantity);
        xml.writeElement("COUNTEDBYID", this.editedBy);
        xml.writeCustomFieldsImplicit(this.customFields);

        xml.writeEndElement(); // ICCYCLECOUNTENTRY
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
