/**
 * @module Intacct/SDK/Functions/Purchasing
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
import AbstractPurchasingTransaction from "./AbstractProjectEstimate";

export default class PurchasingTransactionDelete extends AbstractPurchasingTransaction {

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("delete_pjestimate");

        // TODO review documentId or transactionId
        xml.writeAttribute("key", this.documentId, true);

        xml.writeEndElement(); // delete_potransaction

        xml.writeEndElement(); // function
    }
}
