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
import AbstractWarehouseTransfer from "./AbstractWarehouseTransfer";

export default class WarehouseTransferCreate extends AbstractWarehouseTransfer {

    public writeXml(xml: IaXmlWriter): void {

        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("ICTRANSFER");
        xml.writeElementDate("TRANSACTIONDATE", this.transactionDate, IaXmlWriter.intacctDateFormat);
        xml.writeElement("REFERENCENO", this.referenceNumber);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("TRANSFERTYPE", this.transferType);
        xml.writeElementDate("OUTDATE", this.outDate, IaXmlWriter.intacctDateFormat);
        xml.writeElementDate("INDATE", this.inDate, IaXmlWriter.intacctDateFormat);
        xml.writeElement("EXCH_RATE_TYPE_ID", this.exchangeRateTypeId);
        xml.writeStartElement("ICTRANSFERITEMS");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                xml.writeStartElement("ICTRANSFERITEM");
                line.writeXml(xml);
                xml.writeEndElement(); // ICTRANSFERITEM
            }
        }
        xml.writeEndElement(); // ICTRANSFERITEMS
        xml.writeEndElement(); // ICTRANSFER
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
