/**
 * @module Intacct/SDK/Functions/Projects
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
import AbstractProjectContract from "./AbstractProjectContract";

export default class ProjectUpdate extends AbstractProjectContract {

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update");
        xml.writeStartElement("PROJECTCONTRACT");
        xml.writeElement("PROJECTID", this.projectId, true);
        xml.writeElement("RECORDNO", this.recordno, true);
        xml.writeElement("PC_ORIGINAL_GROSS_MARGIN", this.originalGrossMargin);
        xml.writeElement("PC_ORIGINAL_GROSS_MARGIN_RATE", this.originalGrossMarginRate);
        xml.writeElement("PC_TOTAL_GROSS_MARGIN_RATE", this.totalGrossMarginRate);
        xml.writeElement("PC_TOTAL_WORKED_HOURS", this.totalWorkedHours);
        xml.writeElement("PC_PROJECT_ESTIMATE_COST", this.projectEstimateCost);
        xml.writeElement("PC_CHANGE_ORDER_COST", this.changeOrderCost);
        xml.writeElement("PC_CHANGE_ORDER_PRICE", this.changeOrderPrice);
        xml.writeElement("ORIGINALGLBUDGETID", this.originalGlBudgetId);
        xml.writeElement("REVISIONGLBUDGETID", this.revisionGlBudgetId);
        xml.writeElement("APPROVEDGLBUDGETID", this.approvedGlBudgetId);
        xml.writeElement("POSTTO", this.postTo);
        xml.writeElement("POSTED", this.posted);
       
        xml.writeEndElement(); // PROJECTCONTRACT
        xml.writeEndElement(); // update
        xml.writeEndElement(); // function
    }
}
