/**
 * @module Intacct/SDK/Functions/Construction
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
import AbstractProjectEstimateLine from "./AbstractProjectEstimateLine";

export default class ProjectEstimateLineCreate extends AbstractProjectEstimateLine {
    public writeXml(xml: IaXmlWriter): void {
        xml.writeElement("pjestimateid", this.pjestimateId)
        xml.writeElement("itemid", this.itemId, true);
        xml.writeElement("itemname", this.itemDescription);
        xml.writeElement("taskid", this.taskId);
        xml.writeElement("costtypeid", this.costTypeId);
        xml.writeElement("accountno", this.accountNo);
        xml.writeElement("productionunits", this.productionUnits);
        xml.writeElement("wftype", this.wfType);
        xml.writeElementDate("effectivedate", this.effectivedate, IaXmlWriter.intacctDateFormat);
        xml.writeElement("currency", this.currency);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("memo", this.memo);
        xml.writeElement("amount", this.amount);
        xml.writeCustomFieldsExplicit(this.customFields);
       
    }
}
