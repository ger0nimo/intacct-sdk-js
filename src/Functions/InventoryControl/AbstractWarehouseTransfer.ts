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

import AbstractFunction from "../AbstractFunction";
import AbstractWarehouseTransferLine from "./AbstractWarehouseTransferLine";

export default abstract class AbstractWarehouseTransfer extends AbstractFunction {

    public recordNo: number;

    public transactionDate: Date;

    public referenceNumber: string;

    public description: string;

    public transferType: string;

    public action: string;

    public outDate: Date;

    public inDate: Date;

    public exchangeRate: Number;

    public exchangeRateTypeId: string;
    
    public exchangeRateDate: Date;

    public lines: AbstractWarehouseTransferLine[];

}
