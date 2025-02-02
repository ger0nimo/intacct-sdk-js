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

import AbstractFunction from "../AbstractFunction";

export default abstract class AbstractTask extends AbstractFunction {

    public recordNo: number;
    public taskName: string;
    public projectId: string;
    public plannedBeginDate: Date;
    public plannedEndDate: Date;
    public classId: string;
    public itemId: string;
    public billable: boolean;
    public description: string;
    public milestone: boolean;
    public utilized: boolean;
    public priority: string;
    public wbsCode: string;
    public taskStatus: string;
    public timeType: string;
    public parentTaskRecordNo: number;
    public attachmentsId: string;
    // Customize added March 10 - Orlando
    public standardTaskId: string;
    public taskId: string;
    
    // TODO implement observedPercentComplete as separate object like other SDK's

    public plannedDuration: number;
    public estimatedDuration: number;
    public customFields: Array<[string, any]> = [];
}
