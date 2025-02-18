  $(document).ready(function () {

// if you want the banner off, just comment out the file

var alphaBanner = document.getElementsByTagName('BODY')[0];
alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top bg-warning mrgn-tp-0 mrgn-bttm-0" role="banner"><div class="container"><p class="h2 mrgn-tp-md">This site is for CRA testing only</p></div></section >');

//Renders search disabled
$('#wb-srch-sub').attr("disabled", true);

//Replace certain canada.ca pages with updated github pages
 var replacements = [{"search": "after-sending-tax-return.html", "replace":"after-sending-tax-return.html"},
    {"search": "after-you-file.html", "replace":"after-you-file"},
    {"search": "deductions-credits-expenses.html", "replace":"deductions-credits-expenses.html"},
    {"search": "about-auto-fill-return.html", "replace":"about-auto-fill-return.html"},
    {"search": "gst-hst-netfile-before-you-start.html", "replace":"gst-hst-netfile-before-you-start.html"},
    {"search": "revenue-agency.html", "replace":"revenue-agency.html"},
    {"search": "change-return.html", "replace":"change-your-return.html"},
    {"search": "deductions-credits-expenses.html", "replace":"claiming-deductions-credits-expenses.html"},
    {"search": "common-adjustments.html", "replace":"common-adjustments.html"},
    {"search": "confirm-payment.html", "replace":"confirm-payment.html"},
    {"search": "cra-login-services.html", "replace":"cra-login-services.html"},
    {"search": "e-services.html", "replace":"e-services.html"},
    {"search": "digital-services-businesses.html", "replace":"digital-services-businesses.html"},
    {"search": "digital-services-individuals.html", "replace":"digital-services-individuals.html"},
    {"search": "digital-services-tax-preparers.html", "replace":"digital-services-tax-preparers.html"},
    {"search": "important-dates-individuals.html", "replace":"important-dates-individuals.html"},
    {"search": "due-dates.html", "replace":"due-dates.html"},
    {"search": "efile-electronic-filers/efile-certified-software-efile-program.html", "replace":"efile-certified-software-efile-program.html"},
    {"search": "efile-individuals.html", "replace":"efile-individuals.html"},
    {"search": "about-express-noa.html", "replace":"sub-enoa.html"},
    {"search": "netfile-overview/after-you-have-filed-your-return-using-netfile.html", "replace":"notice-assessment-understand.html"},
    {"search": "netfile-overview/certified-software-netfile-program.html", "replace":"sub-index.html"},
    {"search": "important-dates-filing-dates-tax-return.html", "replace":"filing-dates-tax-return.html"},
    {"search": "forms-publications.html", "replace":"forms-publications.html"},
    {"search": "netfile-overview/frequently-asked-questions.html", "replace":"sub-netfile.html"},
    {"search": "need-access-code.html", "replace":"need-access-code.html"},
    {"search": "forms-publications/tax-packages-years/general-income-tax-benefit-package.html", "replace":"general-income-tax-benefit-package.html"},
    {"search": "get-ready-taxes.html", "replace":"get-ready-taxes.html"},
    {"search": "gst-hst-filing-remitting.html", "replace":"gst-hst-filing-remitting.html"},
    {"search": "business-account/gst-hst-electronic-filing.html", "replace":"gst-hst-electronic-filing.html"},
    {"search": "gst-hst-netfile.html", "replace":"gst-hst-netfile.html"},
    {"search": "cra-login-help-cra-sign-in-services.html", "replace":"help-cra-sign-in-services.html"},
    {"search": "change-your-return.html", "replace":"change-your-return.html"},
    {"search": "income-tax.html", "replace":"income-tax.html"},
    {"search": "educational-programs.html", "replace":"educational-programs.html"},
    {"search": "representative-authorization/legal-representative.html", "replace":"legal-representative.html"},
    {"search": "line-21400-child-care-expenses.html", "replace":"line-21400-child-care-expenses.html"},
    {"search": "line-48400-refund.html", "replace":"line-48400-refund"},
    {"search": "make-payment.html", "replace":"make-payment.html"},
    {"search": "account-individuals.html", "replace":"cra-login-services.html"},
    {"search": "a-copy-your-notice-assessment-reassessment.html", "replace":"notice-assessment-understand.html"},
    {"search": "notice-assessment-refund-balance.html", "replace":"notice-assessment-understand.html"},
    {"search": "notice-assessment-understand.html", "replace":"notice-assessment-understand.html"},
    {"search": "offering-and-expanding-automatic-tax-filing-services.html", "replace":"offering-and-expanding-automatic-tax-filing-services.html"},
    {"search": "payments.html", "replace":"payments.html"},
    {"search": "payments-cra.html", "replace":"payments-cra.html"},
    {"search": "personal-income-tax.html", "replace":"personal-income-tax.html"},
    {"search": "whats-new.html", "replace":"whats-new.html"},
    {"search": "tax-questions-answers.html", "replace":"tax-questions-answers.html"},
    {"search": "gst-hst-netfile-ready-file-online-check-list.html", "replace":"gst-hst-netfile-ready-file-online-check-list.html"},
    {"search": "https://www.wealthsimple.com/en-ca/tax", "replace":"wealthsimple.html"},
    {"search": "refile-efile-service-providers-online-adjustments-income-tax-benefit-returns.html", "replace":"change-your-return.html"},
    {"search": "refile-online-t1-adjustments-efile-service-providers.html", "replace":"change-your-return.html"},
    {"search": "reporting-income.html", "replace":"reporting-income.html"},
    {"search": "representative-authorization.html", "replace":"representative-authorization.html"},
    {"search": "review-your-tax-return-cra.html", "replace":"review-your-tax-return-cra.html"},
    {"search": "simplefile-pilot.html", "replace":"simplefile-pilot.html"},
    {"search": "t1-adj.html", "replace":"t1-adj.html"},
    {"search": "refunds.html", "replace":"refunds.html"},
    {"search": "tax-slips.html", "replace":"tax-slips.html"},
    {"search": "taxes.html", "replace":"taxes.html"},
    {"search": "https://turbotax.intuit.ca/tax/software/online?cid=cra_fy22_tto_e_online", "replace":"turbotax.html"},
    {"search": "update-information-cra.html", "replace":"update-information-cra.html"},
    {"search": "a-proof-income-statement-option-print.html", "replace":"a-proof-income-statement-option-print.html"},
    {"search": "forms-publications.html", "replace":"forms-publications.html"},
    {"search": "a-copy-your-tax-slips.html", "replace":"a-copy-your-tax-slips.html"},
    {"search": "get-ready-taxes/ways.html", "replace":"how-file.html"}]   
//Function to replace URLs of array "replacements"    
function replaceUrls() {
    $("a").each(function(){
        var link = $(this);
        var href = link.attr("href");
        if (href && (href.startsWith("http") || href.startsWith("/en")  || href.startsWith("mailto"))) {
             if (href.includes("cra-design.github.io")) {
                return;
             }
            var replaced = replacements.some(function(item){
                if (href.includes(item.search)) {
                    link.attr("href", item.replace);
                    return true;
                }
                return false;
            });
            if (!replaced) {
                link.attr("href", "404.html");
            }
        }
    });
};
    //Run when menu is loaded
      $(document).on( "wb-ready.wb", replaceUrls);

//Separate script to null all canada.ca links to a 404 page
$( document ).on( "wb-ready.wb", function( event ) {
//$("a[href*='canada.ca']").attr("href", "404.html");
//$("a[href*='.gc.ca/']").attr("href", "404.html");
//$("#chat-bottom-bar, #gc-pft, .pagedetails details").addClass("hidden");	
   $("#chat-bottom-bar, .shr-opn, .gc-followus").addClass("hidden");
});
$( "[data-ajax-replace]" ).on( "wb-ready.wb-data-ajax", function( event, ajaxType ) {

   $(".gc-followus").addClass("hidden");
});


    
//Remove visited link design from 404 pages
var visited_link_styling = "<style> a[href='404.html']:visited{ color:#284162; } </style>"; $('head').append( visited_link_styling );
  });
