#pragma checksum "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b577886336cec9f4e83a77b0663cd43a7c1cf096"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Account_Register), @"mvc.1.0.view", @"/Views/Account/Register.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Account/Register.cshtml", typeof(AspNetCore.Views_Account_Register))]
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
#line 1 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\_ViewImports.cshtml"
using Abp.Localization;

#line default
#line hidden
#line 1 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
using Abp.Authorization.Users;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b577886336cec9f4e83a77b0663cd43a7c1cf096", @"/Views/Account/Register.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce343e6a069753839c90283688a3deb27c70db97", @"/Views/_ViewImports.cshtml")]
    public class Views_Account_Register : AzureIoTPortal.Web.Views.AzureIoTPortalRazorPage<AzureIoTPortal.Web.Models.Account.RegisterViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", "~/view-resources/Views/Account/Login.css", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("names", "Development", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", "~/view-resources/Views/Account/Login.min.css", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("names", "Staging,Production", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "~/view-resources/Views/Account/Register.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "~/view-resources/Views/Account/Register.min.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Login", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-default waves-effect"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("RegisterForm"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Register", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_11 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.EnvironmentTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
  
    ViewBag.DisableTopBar = true;

#line default
#line hidden
            DefineSection("Styles", async() => {
                BeginContext(146, 5, true);
                WriteLiteral("\n    ");
                EndContext();
                BeginContext(151, 160, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("environment", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf0968452", async() => {
                    BeginContext(184, 9, true);
                    WriteLiteral("\n        ");
                    EndContext();
                    BeginContext(193, 99, false);
                    __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "b577886336cec9f4e83a77b0663cd43a7c1cf0968866", async() => {
                    }
                    );
                    __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper);
                    __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.Href = (string)__tagHelperAttribute_1.Value;
                    __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
#line 9 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.AppendVersion = true;

#line default
#line hidden
                    __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                    await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                    if (!__tagHelperExecutionContext.Output.IsContentModified)
                    {
                        await __tagHelperExecutionContext.SetOutputContentAsync();
                    }
                    Write(__tagHelperExecutionContext.Output);
                    __tagHelperExecutionContext = __tagHelperScopeManager.End();
                    EndContext();
                    BeginContext(292, 5, true);
                    WriteLiteral("\n    ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.EnvironmentTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper.Names = (string)__tagHelperAttribute_2.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(311, 6, true);
                WriteLiteral("\n\n    ");
                EndContext();
                BeginContext(317, 171, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("environment", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09612233", async() => {
                    BeginContext(357, 9, true);
                    WriteLiteral("\n        ");
                    EndContext();
                    BeginContext(366, 103, false);
                    __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "b577886336cec9f4e83a77b0663cd43a7c1cf09612649", async() => {
                    }
                    );
                    __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper);
                    __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.Href = (string)__tagHelperAttribute_3.Value;
                    __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
#line 13 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.AppendVersion = true;

#line default
#line hidden
                    __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                    await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                    if (!__tagHelperExecutionContext.Output.IsContentModified)
                    {
                        await __tagHelperExecutionContext.SetOutputContentAsync();
                    }
                    Write(__tagHelperExecutionContext.Output);
                    __tagHelperExecutionContext = __tagHelperScopeManager.End();
                    EndContext();
                    BeginContext(469, 5, true);
                    WriteLiteral("\n    ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.EnvironmentTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper.Names = (string)__tagHelperAttribute_4.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(488, 1, true);
                WriteLiteral("\n");
                EndContext();
            }
            );
            DefineSection("Scripts", async() => {
                BeginContext(508, 5, true);
                WriteLiteral("\n    ");
                EndContext();
                BeginContext(513, 153, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("environment", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09616211", async() => {
                    BeginContext(546, 9, true);
                    WriteLiteral("\n        ");
                    EndContext();
                    BeginContext(555, 92, false);
                    __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09616626", async() => {
                    }
                    );
                    __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_5.Value;
                    __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
#line 18 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
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
                    BeginContext(647, 5, true);
                    WriteLiteral("\n    ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.EnvironmentTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper.Names = (string)__tagHelperAttribute_2.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(666, 6, true);
                WriteLiteral("\n\n    ");
                EndContext();
                BeginContext(672, 164, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("environment", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09619923", async() => {
                    BeginContext(712, 9, true);
                    WriteLiteral("\n        ");
                    EndContext();
                    BeginContext(721, 96, false);
                    __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09620338", async() => {
                    }
                    );
                    __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
                    __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_6.Value;
                    __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_6);
#line 22 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
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
                    BeginContext(817, 5, true);
                    WriteLiteral("\n    ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.EnvironmentTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_EnvironmentTagHelper.Names = (string)__tagHelperAttribute_4.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(836, 1, true);
                WriteLiteral("\n");
                EndContext();
            }
            );
            BeginContext(839, 50, true);
            WriteLiteral("<div class=\"card\">\n    <div class=\"body\">\n        ");
            EndContext();
            BeginContext(889, 2647, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09623809", async() => {
                BeginContext(949, 37, true);
                WriteLiteral("\n            <h4 class=\"text-center\">");
                EndContext();
                BeginContext(987, 13, false);
#line 28 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                               Write(L("Register"));

#line default
#line hidden
                EndContext();
                BeginContext(1000, 7, true);
                WriteLiteral("</h4>\n\n");
                EndContext();
#line 30 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
             if (@ViewBag.ErrorMessage != null)
            {

#line default
#line hidden
                BeginContext(1069, 99, true);
                WriteLiteral("                <div class=\"alert alert-danger\">\n                    <i class=\"fa fa-warning\"></i> ");
                EndContext();
                BeginContext(1169, 20, false);
#line 33 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                             Write(ViewBag.ErrorMessage);

#line default
#line hidden
                EndContext();
                BeginContext(1189, 24, true);
                WriteLiteral("\n                </div>\n");
                EndContext();
#line 35 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
            }

#line default
#line hidden
                BeginContext(1227, 56, true);
                WriteLiteral("\n            <input type=\"hidden\" name=\"IsExternalLogin\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 1283, "\"", 1324, 1);
#line 37 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 1291, Model.IsExternalLogin.ToString(), 1291, 33, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1325, 67, true);
                WriteLiteral(" />\n            <input type=\"hidden\" name=\"ExternalLoginAuthSchema\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 1392, "\"", 1430, 1);
#line 38 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 1400, Model.ExternalLoginAuthSchema, 1400, 30, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1431, 164, true);
                WriteLiteral(" />\n\n            <div class=\"form-group form-float\">\n                <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" name=\"Name\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 1595, "\"", 1614, 1);
#line 42 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 1603, Model.Name, 1603, 11, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1615, 9, true);
                WriteLiteral(" required");
                EndContext();
                BeginWriteAttribute("maxlength", " maxlength=\"", 1624, "\"", 1662, 1);
#line 42 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 1636, AbpUserBase.MaxNameLength, 1636, 26, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1663, 48, true);
                WriteLiteral(">\n                    <label class=\"form-label\">");
                EndContext();
                BeginContext(1712, 9, false);
#line 43 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                         Write(L("Name"));

#line default
#line hidden
                EndContext();
                BeginContext(1721, 214, true);
                WriteLiteral("</label>\n                </div>\n            </div>\n\n            <div class=\"form-group form-float\">\n                <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" name=\"Surname\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 1935, "\"", 1957, 1);
#line 49 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 1943, Model.Surname, 1943, 14, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1958, 9, true);
                WriteLiteral(" required");
                EndContext();
                BeginWriteAttribute("maxlength", " maxlength=\"", 1967, "\"", 2008, 1);
#line 49 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 1979, AbpUserBase.MaxSurnameLength, 1979, 29, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(2009, 48, true);
                WriteLiteral(">\n                    <label class=\"form-label\">");
                EndContext();
                BeginContext(2058, 12, false);
#line 50 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                         Write(L("Surname"));

#line default
#line hidden
                EndContext();
                BeginContext(2070, 220, true);
                WriteLiteral("</label>\n                </div>\n            </div>\n\n            <div class=\"form-group form-float\">\n                <div class=\"form-line\">\n                    <input type=\"email\" class=\"form-control\" name=\"EmailAddress\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 2290, "\"", 2317, 1);
#line 56 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 2298, Model.EmailAddress, 2298, 19, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(2318, 9, true);
                WriteLiteral(" required");
                EndContext();
                BeginWriteAttribute("maxlength", " maxlength=\"", 2327, "\"", 2373, 1);
#line 56 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 2339, AbpUserBase.MaxEmailAddressLength, 2339, 34, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(2374, 48, true);
                WriteLiteral(">\n                    <label class=\"form-label\">");
                EndContext();
                BeginContext(2423, 17, false);
#line 57 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                         Write(L("EmailAddress"));

#line default
#line hidden
                EndContext();
                BeginContext(2440, 215, true);
                WriteLiteral("</label>\n                </div>\n            </div>\n\n            <div class=\"form-group form-float\">\n                <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" name=\"UserName\"");
                EndContext();
                BeginWriteAttribute("value", " value=\"", 2655, "\"", 2678, 1);
#line 63 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 2663, Model.UserName, 2663, 15, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(2679, 9, true);
                WriteLiteral(" required");
                EndContext();
                BeginWriteAttribute("maxlength", " maxlength=\"", 2688, "\"", 2730, 1);
#line 63 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 2700, AbpUserBase.MaxUserNameLength, 2700, 30, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(2731, 48, true);
                WriteLiteral(">\n                    <label class=\"form-label\">");
                EndContext();
                BeginContext(2780, 13, false);
#line 64 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                         Write(L("UserName"));

#line default
#line hidden
                EndContext();
                BeginContext(2793, 228, true);
                WriteLiteral("</label>\n                </div>\n            </div>\n\n            <div class=\"form-group form-float\">\n                <div class=\"form-line\">\n                    <input type=\"password\" class=\"form-control\" name=\"Password\" required");
                EndContext();
                BeginWriteAttribute("maxlength", " maxlength=\"", 3021, "\"", 3068, 1);
#line 70 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
WriteAttributeValue("", 3033, AbpUserBase.MaxPlainPasswordLength, 3033, 35, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(3069, 48, true);
                WriteLiteral(">\n                    <label class=\"form-label\">");
                EndContext();
                BeginContext(3118, 13, false);
#line 71 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                         Write(L("Password"));

#line default
#line hidden
                EndContext();
                BeginContext(3131, 154, true);
                WriteLiteral("</label>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    ");
                EndContext();
                BeginContext(3285, 74, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b577886336cec9f4e83a77b0663cd43a7c1cf09635146", async() => {
                    BeginContext(3346, 9, false);
#line 77 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                                                           Write(L("Back"));

#line default
#line hidden
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_7.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_7);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_8);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(3359, 96, true);
                WriteLiteral("\n                    <button id=\"RegisterButton\" class=\"btn bg-pink waves-effect\" type=\"submit\">");
                EndContext();
                BeginContext(3456, 13, false);
#line 78 "C:\Users\Teemo\Documents\Visual Studio 2015\Projects\abpIotPortal\aspnet-core\src\AzureIoTPortal.Web.Mvc\Views\Account\Register.cshtml"
                                                                                          Write(L("Register"));

#line default
#line hidden
                EndContext();
                BeginContext(3469, 60, true);
                WriteLiteral("</button>\n                </div>\n            </div>\n        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_9);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Action = (string)__tagHelperAttribute_10.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_10);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_11.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_11);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3536, 19, true);
            WriteLiteral("\n    </div>\n</div>\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<AzureIoTPortal.Web.Models.Account.RegisterViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591