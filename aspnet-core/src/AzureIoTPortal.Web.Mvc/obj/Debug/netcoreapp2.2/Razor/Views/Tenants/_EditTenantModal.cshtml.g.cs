#pragma checksum "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "69fe6abd24ab5c67053f8984afcd41a7ef2d84d1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Tenants__EditTenantModal), @"mvc.1.0.view", @"/Views/Tenants/_EditTenantModal.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Tenants/_EditTenantModal.cshtml", typeof(AspNetCore.Views_Tenants__EditTenantModal))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\_ViewImports.cshtml"
using Abp.Localization;

#line default
#line hidden
#line 1 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
using Abp.MultiTenancy;

#line default
#line hidden
#line 2 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
using AzureIoTPortal.MultiTenancy.Dto;

#line default
#line hidden
#line 3 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
using AzureIoTPortal.Web.Models.Common.Modals;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"69fe6abd24ab5c67053f8984afcd41a7ef2d84d1", @"/Views/Tenants/_EditTenantModal.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce343e6a069753839c90283688a3deb27c70db97", @"/Views/_ViewImports.cshtml")]
    public class Views_Tenants__EditTenantModal : AzureIoTPortal.Web.Views.AzureIoTPortalRazorPage<TenantDto>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", new global::Microsoft.AspNetCore.Html.HtmlString("TenantEditForm"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("role", new global::Microsoft.AspNetCore.Html.HtmlString("form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-validation"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "~/view-resources/Views/Tenants/_EditTenantModal.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 5 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
  
    Layout = null;

#line default
#line hidden
            BeginContext(152, 100, false);
#line 8 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
Write(Html.Partial("~/Views/Shared/Modals/_ModalHeader.cshtml", new ModalHeaderViewModel(L("EditTenant"))));

#line default
#line hidden
            EndContext();
            BeginContext(252, 31, true);
            WriteLiteral("\n\n<div class=\"modal-body\">\n    ");
            EndContext();
            BeginContext(283, 1083, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "69fe6abd24ab5c67053f8984afcd41a7ef2d84d16361", async() => {
                BeginContext(358, 39, true);
                WriteLiteral("\n        <input type=\"hidden\" name=\"Id\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 397, "\"", 414, 1);
#line 12 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
WriteAttributeValue("", 405, Model.Id, 405, 9, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(415, 157, true);
                WriteLiteral("/>\n        <div class=\"form-group form-float\">\n            <div class=\"form-line\">\n                <input class=\"form-control\" type=\"text\" name=\"TenancyName\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 572, "\"", 598, 1);
#line 15 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
WriteAttributeValue("", 580, Model.TenancyName, 580, 18, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(599, 82, true);
                WriteLiteral(" required maxlength=\"64\" minlength=\"2\">\n                <label class=\"form-label\">");
                EndContext();
                BeginContext(682, 16, false);
#line 16 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
                                     Write(L("TenancyName"));

#line default
#line hidden
                EndContext();
                BeginContext(698, 190, true);
                WriteLiteral("</label>\n            </div>\n        </div>\n        <div class=\"form-group form-float\">\n            <div class=\"form-line\">\n                <input type=\"text\" name=\"Name\" class=\"form-control\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 888, "\"", 907, 1);
#line 21 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
WriteAttributeValue("", 896, Model.Name, 896, 11, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(908, 69, true);
                WriteLiteral(" required maxlength=\"128\">\n                <label class=\"form-label\">");
                EndContext();
                BeginContext(978, 9, false);
#line 22 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
                                     Write(L("Name"));

#line default
#line hidden
                EndContext();
                BeginContext(987, 196, true);
                WriteLiteral("</label>\n            </div>\n        </div>\n        <div class=\"form-group form-float\">\n            <div class=\"\">\n                <input id=\"isactive\" type=\"checkbox\" name=\"IsActive\" value=\"true\" ");
                EndContext();
                BeginContext(1185, 31, false);
#line 27 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
                                                                              Write(Model.IsActive ? "checked" : "");

#line default
#line hidden
                EndContext();
                BeginContext(1217, 81, true);
                WriteLiteral(" class=\"form-control\"/>\n                <label for=\"isactive\" class=\"form-label\">");
                EndContext();
                BeginContext(1299, 13, false);
#line 28 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
                                                    Write(L("IsActive"));

#line default
#line hidden
                EndContext();
                BeginContext(1312, 47, true);
                WriteLiteral("</label>\n            </div>\n        </div>\n    ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            BeginWriteTagHelperAttribute();
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __tagHelperExecutionContext.AddHtmlAttribute("novalidate", Html.Raw(__tagHelperStringValueBuffer), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.Minimized);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1366, 9, true);
            WriteLiteral("\n</div>\n\n");
            EndContext();
            BeginContext(1376, 74, false);
#line 34 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
Write(Html.Partial("~/Views/Shared/Modals/_ModalFooterWithSaveAndCancel.cshtml"));

#line default
#line hidden
            EndContext();
            BeginContext(1450, 2, true);
            WriteLiteral("\n\n");
            EndContext();
            BeginContext(1452, 100, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "69fe6abd24ab5c67053f8984afcd41a7ef2d84d113035", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
#line 36 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\SmartTransaction\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Tenants\_EditTenantModal.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1552, 1, true);
            WriteLiteral("\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<TenantDto> Html { get; private set; }
    }
}
#pragma warning restore 1591