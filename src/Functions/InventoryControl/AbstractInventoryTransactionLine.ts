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
import IXmlObject from "../../Xml/IXmlObject";
import AbstractTransactionItemDetail from "./AbstractTransactionItemDetail";

export default abstract class AbstractInventoryTransactionLine implements IXmlObject {

    public itemId: string;
    public itemDescription: string;
    public warehouseId: string;
    public quantity: number;
    public unit: string;
    public cost: number;
    public itemDetails: AbstractTransactionItemDetail[];
    public departmentId: string;
    public locationId: string;
    public projectId: string;
    public customerId: string;
    public vendorId: string;
    public employeeId: string;
    public classId: string;
    public contractId: string;
    public taskId: string;
    public costTypeId: string;
    public customFields: Array<[string, any]> = [];

    public abstract writeXml(xml: IaXmlWriter): void;
}
