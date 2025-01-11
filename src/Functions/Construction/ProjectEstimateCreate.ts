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
import AbstractProjectEstimate from "./AbstractProjectEstimate";

export default class ProjectEstimateCreate extends AbstractProjectEstimate {
    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("pjestimate");
        xml.writeElement("pjestimateid", this.pjestimateId);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("posted", this.posted);
        xml.writeElement("postto", this.postto);
        xml.writeElementDate("estimatedate", this.estimateDate, IaXmlWriter.intacctDateFormat);
        xml.writeElement("pjestimatetypename", this.pjestimateTypeName);
        xml.writeElement("glbudgetid", this.glbudgetId);
        
        xml.writeStartElement("entries");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                xml.writeStartElement("pjestimateentry");
                line.writeXml(xml);
                xml.writeEndElement(); // pjestimateentry
            }
        }
        xml.writeEndElement(); // ENTRIES
        xml.writeEndElement(); // PJESTIMATE
        xml.writeEndElement(); // create
        
        xml.writeEndElement(); // function
         
    }
}
