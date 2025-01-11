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
import AbstractProject from "./AbstractProject";

export default class ProjectUpdate extends AbstractProject {

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("update");
        xml.writeStartElement("PROJECT");

        xml.writeElement("PROJECTID", this.projectId, true);

        xml.writeElement("NAME", this.projectName);
        xml.writeElement("PROJECTCATEGORY", this.projectCategory);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("PARENTID", this.parentProjectId);
        xml.writeElement("INVOICEWITHPARENT", this.invoiceWithParent);
        xml.writeElement("PROJECTTYPE", this.projectType);
        xml.writeElement("PROJECTSTATUS", this.projectStatus);
        xml.writeElement("CUSTOMERID", this.customerId);
        xml.writeElement("MANAGERID", this.projectManagerEmployeeId);
        xml.writeElement("CUSTUSERID", this.externalUserId);
        xml.writeElement("SALESCONTACTID", this.salesContactEmployeeId);
        xml.writeElement("SF_OPPORTUNITY_NUMBER",this.salesforceOpportunityNo);
        xml.writeElement("DOCNUMBER", this.referenceNo);
        xml.writeElement("USERRESTRICTIONS", this.userRestrictions);

        if (this.transactionRules != null && this.transactionRules.length > 0) {
            for (const transactionRule of this.transactionRules) {
                xml.writeStartElement("PROJECT_RULES");
                xml.writeElement("RULENAME", transactionRule);
                xml.writeEndElement(); // PROJECT_RULES
            }
        }

        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        } else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }

        if (this.primaryContactName != null) {
            xml.writeStartElement("CONTACTINFO");
            xml.writeElement("CONTACTNAME", this.primaryContactName);
            xml.writeEndElement(); // CONTACTINFO
        }
        if (this.billToContactName != null) {
            xml.writeStartElement("BILLTO");
            xml.writeElement("CONTACTNAME", this.billToContactName);
            xml.writeEndElement(); // BILLTO
        }
        if (this.shipToContactName != null) {
            xml.writeStartElement("SHIPTO");
            xml.writeElement("CONTACTNAME", this.shipToContactName);
            xml.writeEndElement(); // SHIPTO
        }

        xml.writeElement("TERMNAME", this.paymentTerms);
        xml.writeElement("BILLINGTYPE", this.billingType);
        xml.writeElementDate("BEGINDATE", this.beginDate, IaXmlWriter.intacctDateFormat);
        xml.writeElementDate("ENDDATE", this.endDate, IaXmlWriter.intacctDateFormat);
        xml.writeElement("DEPARTMENTID", this.departmentId);
        xml.writeElement("LOCATIONID", this.locationId);
        xml.writeElement("CLASSID", this.classId);
        xml.writeElement("SUPDOCID", this.attachmentsId);
        xml.writeElement("BILLABLEEXPDEFAULT", this.billableEmployeeExpense);
        xml.writeElement("BILLABLEAPPODEFAULT", this.billableApPurchasing);
        xml.writeElement("CURRENCY", this.currency);
        xml.writeElement("SONUMBER", this.salesOrderNo);
        xml.writeElement("PONUMBER", this.purchaseOrderNo);
        xml.writeElement("POAMOUNT", this.purchaseOrderAmount);
        xml.writeElement("PQNUMBER", this.purchaseQuoteNo);
        xml.writeElement("CONTRACTAMOUNT", this.contractAmount);
        xml.writeElement("BILLINGPRICING", this.laborPricingOption);
        xml.writeElement("BILLINGRATE", this.laborPricingDefaultRate);
        xml.writeElement("EXPENSEPRICING", this.expensePricingOption);
        xml.writeElement("EXPENSERATE", this.expensePricingDefaultRate);
        xml.writeElement("POAPPRICING", this.apPurchasingPricingOption);
        xml.writeElement("POAPRATE", this.apPurchasingPricingDefaultRate);
        xml.writeElement("BUDGETAMOUNT", this.budgetedBillingAmount);
        xml.writeElement("BUDGETEDCOST", this.budgetedCost);
        xml.writeElement("BUDGETQTY", this.budgetedDuration);
        xml.writeElement("BUDGETID", this.glBudgetId);
        xml.writeElement("INVOICEMESSAGE", this.invoiceMessage);
        xml.writeElement("INVOICECURRENCY", this.invoiceCurrency);
        xml.writeElement("PROJ_CONSTRUCTION_TYPE", this.constructionType);
        xml.writeElement("DESIGN_ENGINEER", this.designEngineer);
        xml.writeElement("PROJ_JOB_CITY", this.jobCity);
        xml.writeElement("PROJ_PROJECT_COORDINATOR", this.projectCoordinator);

        xml.writeElement("PROJ_BILLING_DUE_DATE", this.billingDuedate);
        xml.writeElement("PROJ_SALES_PERSON", this.salesPerson);
        xml.writeElement("PROJ_BILLING_CONTACTS", this.billingContacts);
        xml.writeElement("PROJ_OCIP", this.ocip);
        xml.writeElement("CLOSEOUT_COMPLETE", this.closeComplete);
        xml.writeElement("PROJ_OCIP_EXCESS", this.ocipExcess);
        xml.writeElement("PROJ_OCIP_WORKERS_COMP", this.ocipWC);
        xml.writeElement("PROJ_OCIP_LIABILITY", this.ocipGL);
        xml.writeElement("PROJ_OCIP_PLATFORM", this.ocipPlatform);

        xml.writeElement("SF_OPPORTUNITY_NUMBER", this.sfOpportunityNumber);
        xml.writeElement("PROJ_PERMITS_REINBURSABLE", this.permitReinbursable);
        xml.writeElement("PROJ_COMPLIANCE_ASSIGNED_TO", this.complianceAssignedTo);
        xml.writeElement("PROJ_CONSTRUCTION_MANAGER", this.constructionManager);

        xml.writeElement("PROJ_CONTRACT_SOV_LINES", this.contractSovLines);
        xml.writeElement("PROJ_COST_CODES_FINAL", this.costcodesFinal);
        xml.writeElement("PROJ_CSI_COI_ON_FILE", this.csiOnFile);
        xml.writeElement("PROJ_ESTIMATE_FROM_ACCT_BID_TOOL", this.estimateFromAcctBidTool);
        xml.writeElement("PROJ_FINAL_CONTRACT_AND_BILLING_INFO", this.finalContractAndBillingInfo);
        //LABOR COMPLIANCE
        xml.writeElement("PROJ_LC_CPR_PLATFORM", this.lcCPRPlatform);
        xml.writeElement("PROJ_BONDED", this.bonded);
        xml.writeElement("PROJ_LC_DIR_NUMBER", this.lcDIRNumber);
        xml.writeElement("PROJ_LC_DIR_WORK_DAY", this.lcDIRWorkDay);
        xml.writeElementDate("PROJ_LC_FINAL_CPR_DATE", this.lcFinalCPRDate, IaXmlWriter.intacctDateFormat);
        xml.writeElementDate("PROJ_LC_UP_TO_LATEST_CPR_FORM_FILLED", this.lcUpToLatestCPRFormFilled, IaXmlWriter.intacctDateFormat);
        xml.writeElementDate("PROJ_LC_UP_TO_LATEST_ENTERED_TO_DIR", this.lcUpToLatestEnteredDir, IaXmlWriter.intacctDateFormat);
        xml.writeElementDate("PROJ_MILESTONE_ESTIMATE_ATTACHMENT_ROUGHIN", this.milestoneEstimateAttachmentRoughin,IaXmlWriter.intacctDateFormat);
        xml.writeElement("PROJ_LC_LCP_ACCOUNT", this.lcLcpAccount);
        xml.writeElement("PROJ_PW_REQUIREMENTS", this.pwRequirements);
        xml.writeElement("TARGET_GP", this.targetGP);
        xml.writeElement("PROJ_AR_ASSIGNED", this.arAssigned);
        xml.writeElement("PROJ_ADDRESS", this.projectAddress);
        xml.writeElement("PROJECT_SETUP_COMPLETE", this.projectSetupComplete);
 

        
        
        
        
        
        
        



        xml.writeCustomFieldsImplicit(this.customFields);

        xml.writeEndElement(); // PROJECT
        xml.writeEndElement(); // update

        xml.writeEndElement(); // function
    }
}
