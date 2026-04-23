/**
 * KooRender Multi-language Support (i18n)
 * 多语言配置在前端，通过 localStorage 持久化，切换页面会记住用户选择。
 *
 * @author huopu-ai
 * @date 2026/03/12
 */

/** 前端存储键，用于跨页面记住语言 */
const I18N_STORAGE_KEY = 'koorender_lang';

const translations = {
    'en': {
        'nav_features': 'Features',
        'nav_about': 'About',
        'nav_contact': 'Contact',
        'nav_login': 'Login',
        'nav_get_started': 'Get Started',
        'pop_title': 'Welcome to KooRender',
        'pop_desc': 'Login or register to continue',
        'pop_continue_google': 'Continue with Google',
        'pop_use_email': 'or use email',
        'pop_register': 'Register',
        'pop_create_account': 'Create Account',
        'pop_email_address': 'Email address',
        'pop_password': 'Password', 
        'agree_prefix': 'By continuing, you agree to our', 
        'agree_terms': 'Terms', 
        'agree_and': 'and', 
        'hero_title': 'Cloud-based <span class="text-primary">Real-time Rendering</span>',
        'hero_desc': 'Experience physically realistic, high-quality rendering anytime, anywhere—no local high-end machines required. KooRender redefines 3D rendering with cloud power and AI intelligence.',
        'hero_tagline': 'Cloud-based Real-time Renderer',
        'page_title_home': 'KooRender - Cloud-based Real-time Renderer',
        'hero_demo_btn': 'Try Free Demo',
        'hero_learn_more_btn': 'Learn More',
        'hero_trusted_by': 'Trusted by 1000+ professionals worldwide',
        'features_section_title': 'Powerful Features for Every Creator',
        'features_section_desc': 'Built with over a decade of rendering and cloud computing expertise, KooRender delivers unmatched performance and flexibility.',
        'feature_physically_realistic_title': 'Physically Realistic',
        'feature_physically_realistic_desc': 'Achieve studio-quality, physically accurate rendering with our decade-proven technology stack.',
        'feature_anytime_anywhere_title': 'Anytime, Anywhere',
        'feature_anytime_anywhere_desc': 'Enjoy interactive cloud rendering without local high-end hardware—at an affordable cost.',
        'feature_compatibility_title': 'Compatibility',
        'feature_compatibility_desc': 'Seamlessly integrate with 3ds Max workflows and reuse your existing local assets.',
        'feature_open_source_title': 'Open-source Plugin',
        'feature_open_source_desc': 'Fully open-source plugin enables third-party customization to boost your productivity.',
        'feature_built_in_ai_title': 'Built-in AI',
        'feature_built_in_ai_desc': 'Generate and render 3D gaussians with our fine-tuned AI denoiser for faster, better results.',
        'cta_section_title': 'Ready to Transform Your Rendering Workflow?',
        'cta_section_desc': 'Join thousands of creators who are already using KooRender to create stunning visuals with ease.',
        'cta_trial_btn': 'Start Your Free Trial Today',
        'footer_product': 'Product',
        'footer_pricing': 'Pricing',
        'footer_documentation': 'Documentation',
        'footer_api': 'API',
        'footer_company': 'Company',
        'footer_about_us': 'About Us',
        'footer_careers': 'Careers',
        'footer_discussions': 'Discussions',
        'footer_press': 'Press',
        'footer_support': 'Support',
        'footer_help_center': 'Help Center',
        'footer_contact_us': 'Contact Us',
        'footer_terms_of_service': 'Terms of Service',
        'footer_privacy_policy': 'Privacy Policy',
        'footer_copyright': '© 2026 KooRender. All rights reserved.',
        'lang_en': 'English',
        'lang_zh': '中文',
        'nav_all_features': 'All Features',
        'nav_demo': 'Demo',
        'features_list_title': 'KooRender <span class="text-primary">Features</span>',
        'features_list_desc': 'Comprehensive rendering capabilities with extensive support for 3ds Max and V-Ray workflows, combined with cutting-edge 3D Gaussian technology and AI enhancement.',
        'feature_realtime_rendering': 'Real-time Rendering',
        'feature_interactive_image': 'Interactive image rendering',
        'feature_realtime_scene': 'Real-time scene updates',
        'feature_offline_rendering': 'Offline Rendering',
        'feature_static_image': 'Static image rendering',
        'feature_render_view': 'Render View',
        'feature_2d_navigation': '2D image navigation',
        'feature_rgba_channel': 'RGBA channel view',
        'feature_supported_geometry': 'Supported Geometry',
        'feature_static_mesh': 'Static mesh',
        'feature_3d_gaussians': '3D Gaussians',
        'feature_supported_lights': 'Supported Lights',
        'feature_vray_light': 'VRayLight',
        'feature_vray_sun': 'VRaySun',
        'feature_supported_camera': 'Supported Camera',
        'feature_standard_camera': 'Standard camera',
        'feature_perspective': 'Perspective',
        'feature_orthographic': 'Orthographic',
        'feature_supported_materials': 'Supported Materials',
        'feature_supported_texture_maps': 'Supported Texture Maps',
        'feature_image_processing': 'Image Processing',
        'feature_ai_denoiser': 'Built-in AI denoiser',
        'feature_3d_gaussians_gen': '3D Gaussian generation',
        'feature_hybrid_rendering': 'Hybrid rendering with 3D Gaussians',
        'feature_miscellaneous': 'Miscellaneous',
        'feature_user_login': 'User login',
        'feature_auto_update': 'Auto update',
        'get_started_title': 'Get Started with <span class="text-primary">KooRender</span>',
        'get_started_desc': 'Follow these simple steps to start using our cloud-based real-time renderer. <span class="text-primary font-medium">Limited-time free trial available now!</span>',
        'limited_time_free_access': 'Limited-time Free Access',
        'step_1_title': 'Download & Install KooRender',
        'step_1_desc': 'Download the latest KooRender software package and complete the installation following the wizard. Make sure your system meets the minimum requirements (Windows 10+, 3ds Max 2021-2026, V-Ray 4-7).',
        'download_package_btn': 'Download KooRender Package',
        'step_2_title': 'Create an Account',
        'overseas_users_title': 'For Overseas Users',
        'overseas_users_desc': 'Register an account on Coohom platform to access KooRender services',
        'register_coohom_btn': 'Register on Coohom',
        'chinese_users_title': 'For Chinese Users',
        'chinese_users_desc': 'Register an account on Kujiale platform to access KooRender services',
        'register_kujiale_btn': 'Register on Kujiale',
        'already_have_account': 'Already have an account? Skip to step 2 and use your existing Coohom/Kujiale account to log in.',
        'step_3_title': 'Launch & Start Rendering',
        'step_3_step_1': 'Launch your 3ds Max software',
        'step_3_step_2': 'Find and open the KooRender plugin from the 3ds Max plugin menu',
        'step_3_step_3': 'Log in with your Coohom/Kujiale account credentials',
        'step_3_step_4': 'Start using real-time rendering and offline rendering features for free',
        'limited_time_free_trial_title': 'Limited-time Free Trial',
        'limited_time_free_trial_desc': 'Currently, all KooRender features (real-time rendering & offline rendering) are available for free during the trial period. Enjoy high-quality cloud rendering without any cost!',
        'need_help_title': 'Need Help?',
        'need_help_desc': 'If you encounter any issues during the setup process, check our documentation or contact our support team.',
        'view_documentation_btn': 'View Documentation',
        'contact_support_btn': 'Contact Support',
        'why_choose_koorender_title': 'Why Choose <span class="text-primary">KooRender</span> Real-time Cloud Rendering',
        'why_choose_koorender_desc': 'KooRender redefines 3D rendering workflows with cutting-edge cloud-native architecture, delivering real-time interactive rendering capabilities that break through the limitations of local hardware.',
        'core_tech_title': 'Core Technical Architecture Advantages',
        'core_tech_desc': 'Built on a distributed cloud architecture, KooRender solves the pain points of traditional rendering workflows with innovative technical design.',
        'realtime_cloud_rendering_title': 'Real-time Cloud Interactive Rendering',
        'realtime_cloud_rendering_desc': 'Compress the traditional "adjust-wait-evaluate" cycle to seconds, enabling true iterative design thinking.',
        'target_latency_title': 'Target Latency < 2 Seconds',
        'target_latency_desc': 'Achieve near-instant feedback for design adjustments',
        'distributed_gpu_title': 'Distributed GPU Cluster Scaling',
        'distributed_gpu_desc': 'Dynamically expand computing resources based on task complexity',
        'incremental_sync_title': 'Incremental Synchronization Mechanism',
        'incremental_sync_desc': 'Reduce data transmission by only syncing changed elements',
        'hardware_independence_title': 'Local Hardware Independence',
        'hardware_independence_desc': 'Convert fixed costs of high-end workstations to a flexible subscription model (free for a limited time), eliminating hardware investment barriers.',
        'network_requirement_title': 'Basic Network Requirement (50Mbps+)',
        'network_requirement_desc': 'Works on any device with standard broadband connection',
        'productivity_on_any_device_title': 'Full Productivity on Any Device',
        'productivity_on_any_device_desc': 'Access complete rendering capabilities from laptops, tablets, or desktops',
        'on_demand_computing_title': '10x+ On-demand Computing Power',
        'on_demand_computing_desc': 'Scale up to 10 times more computing power when needed',
        'native_plugin_integration_title': '3ds Max Native Plugin Integration',
        'native_plugin_integration_desc': '3ds Max is the most widely used 3D creation tool, and native plugin integration lowers the user adoption barrier.',
        'zero_learning_curve_title': 'Zero Learning Curve',
        'zero_learning_curve_desc': 'Use familiar 3ds Max interface without additional training',
        'workflow_continuity_title': 'Workflow Continuity',
        'workflow_continuity_desc': 'Seamlessly integrate into existing 3ds Max workflows',
        'synergy_effect_title': 'Ecosystem Synergy Effect',
        'synergy_effect_desc': 'Leverage the complete 3ds Max ecosystem and asset library',
        'vray_compatibility_title': 'V-Ray Renderer Compatibility',
        'vray_compatibility_desc': 'Fully compatible with the widely used V-Ray renderer, eliminating migration costs and protecting existing digital asset investments.',
        'consistent_results_title': 'Highly Consistent Rendering Results',
        'consistent_results_desc': 'Match V-Ray\'s rendering quality and visual effects exactly',
        'vray_full_feature_title': 'Full Feature Support',
        'vray_full_feature_desc': 'Support all core V-Ray features and rendering parameters',
        'distributed_vray_title': 'Seamless Distributed Rendering',
        'distributed_vray_desc': 'Built-in distributed rendering architecture with zero configuration',
        'differentiated_value_title': 'Differentiated Value Proposition',
        'differentiated_value_desc': 'KooRender delivers unique value that traditional local rendering and other cloud rendering solutions cannot match.',
        'break_gpu_limit_title': 'Break Local GPU Limitations',
        'break_gpu_limit_desc': 'Near-unlimited computing power scaling to handle complex rendering tasks on demand, without being constrained by local GPU performance.',
        'iteration_efficiency_title': 'Real-time Iteration Efficiency',
        'iteration_efficiency_desc': 'Significantly improve design process efficiency and reduce the cost of final deliverables with instant feedback on every adjustment.',
        'flexible_cost_title': 'Flexible Cost Structure',
        'flexible_cost_desc': 'Pay-as-you-go pricing model (free for a limited time) aligns costs directly with value creation, eliminating wasted investment in idle hardware.',
        'vs_title': 'Traditional Local Rendering vs KooRender Cloud Rendering',
        'vs_aspect': 'Aspect',
        'vs_traditional': 'Traditional Local Rendering',
        'vs_koorender': 'KooRender Cloud Rendering',
        'vs_response_time': 'Response Time',
        'vs_response_time_trad': 'Minutes to hours per iteration',
        'vs_response_time_koo': '< 2 seconds per adjustment',
        'vs_hardware_cost': 'Hardware Cost',
        'vs_hardware_cost_trad': 'High upfront investment ($10k+ per workstation)',
        'vs_hardware_cost_koo': 'Flexible subscription (free trial)',
        'vs_scalability': 'Scalability',
        'vs_scalability_trad': 'Limited to local GPU/CPU',
        'vs_scalability_koo': 'Unlimited on-demand scaling',
        'vs_workflow': 'Workflow',
        'vs_workflow_trad': 'Disruptive "adjust-wait-evaluate" cycle',
        'vs_workflow_koo': 'Seamless real-time iteration'
    },
    'zh': {
        'nav_features': '功能特点',
        'nav_about': '关于我们',
        'nav_contact': '联系我们',
        'nav_login': '登录',
        'nav_get_started': '开始使用',
        'pop_title': '欢迎加入KooRender',
        'pop_desc': '登陆或注册以继续',
        'pop_continue_google': '使用Google继续',
        'pop_use_email': '或使用邮箱',
        'pop_register': '注册',
        'pop_create_account': '创建账号',
        'pop_email_address': '邮箱地址',
        'pop_password': '密码',
        'agree_prefix': '继续表示您同意我们的',
        'agree_terms': '条款',
        'agree_and': '与', 
        'hero_title': '基于云端的 <span class="text-primary">实时渲染</span>',
        'hero_desc': '随时随地体验物理真实、高质量的渲染——无需本地高端机器。KooRender 以云端算力和 AI 智能重新定义 3D 渲染。',
        'hero_tagline': '基于云端的实时渲染器',
        'page_title_home': 'KooRender - 基于云端的实时渲染器',
        'hero_demo_btn': '试用免费 Demo',
        'hero_learn_more_btn': '了解更多',
        'hero_trusted_by': '全球 1000 多名专业人士的选择',
        'features_section_title': '为创作者而生的强大功能',
        'features_section_desc': '凭借十余年的渲染和云计算经验，KooRender 为您提供卓越的性能和灵活性。',
        'feature_physically_realistic_title': '物理真实',
        'feature_physically_realistic_desc': '使用我们经过十年验证的技术栈，实现工作室级、物理准确的渲染效果。',
        'feature_anytime_anywhere_title': '随时随地',
        'feature_anytime_anywhere_desc': '以亲民的价格，在无需本地高端硬件的情况下享受交互式云渲染。',
        'feature_compatibility_title': '高度兼容',
        'feature_compatibility_desc': '无缝集成 3ds Max 工作流，并复用您现有的本地资产。',
        'feature_open_source_title': '开源插件',
        'feature_open_source_desc': '完全开源的插件支持第三方自定义，进一步提升您的生产力。',
        'feature_built_in_ai_title': '内置 AI',
        'feature_built_in_ai_desc': '生成并渲染 3D 高斯（3D Gaussian），内置 AI 降噪器让结果更快更好。',
        'cta_section_title': '准备好改变您的渲染工作流了吗？',
        'cta_section_desc': '加入成千上万使用 KooRender 轻松创作精美视觉效果的创作者。',
        'cta_trial_btn': '立即开始免费试用',
        'footer_product': '产品',
        'footer_pricing': '定价',
        'footer_documentation': '文档',
        'footer_api': 'API',
        'footer_company': '公司',
        'footer_about_us': '关于我们',
        'footer_careers': '加入我们',
        'footer_discussions': '论坛',
        'footer_press': '媒体报道',
        'footer_support': '支持',
        'footer_help_center': '帮助中心',
        'footer_contact_us': '联系我们',
        'footer_terms_of_service': '服务条款',
        'footer_privacy_policy': '隐私政策',
        'footer_copyright': '© 2026 KooRender. 保留所有权利。',
        'lang_en': 'English',
        'lang_zh': '中文',
        'nav_all_features': '所有功能',
        'nav_demo': '演示',
        'features_list_title': 'KooRender <span class="text-primary">功能列表</span>',
        'features_list_desc': '全面的渲染能力，广泛支持 3ds Max 和 V-Ray 工作流，结合尖端的 3D 高斯技术和 AI 增强。',
        'feature_realtime_rendering': '实时渲染',
        'feature_interactive_image': '交互式图像渲染',
        'feature_realtime_scene': '实时场景更新',
        'feature_offline_rendering': '离线渲染',
        'feature_static_image': '静态图像渲染',
        'feature_render_view': '渲染视图',
        'feature_2d_navigation': '2D 图像导航',
        'feature_rgba_channel': 'RGBA 通道查看',
        'feature_supported_geometry': '支持的几何体',
        'feature_static_mesh': '静态网格',
        'feature_3d_gaussians': '3D 高斯',
        'feature_supported_lights': '支持的灯光',
        'feature_vray_light': 'VRayLight',
        'feature_vray_sun': 'VRaySun',
        'feature_supported_camera': '支持的摄像机',
        'feature_standard_camera': '标准摄像机',
        'feature_perspective': '透视图',
        'feature_orthographic': '正交视图',
        'feature_supported_materials': '支持的材质',
        'feature_supported_texture_maps': '支持的贴图',
        'feature_image_processing': '图像处理',
        'feature_ai_denoiser': '内置 AI 降噪器',
        'feature_3d_gaussians_gen': '3D 高斯生成',
        'feature_hybrid_rendering': '3D 高斯混合渲染',
        'feature_miscellaneous': '其他',
        'feature_user_login': '用户登录',
        'feature_auto_update': '自动更新',
        'get_started_title': '开始使用 <span class="text-primary">KooRender</span>',
        'get_started_desc': '按照以下简单步骤开始使用我们的云端实时渲染器。<span class="text-primary font-medium">限时免费试用中！</span>',
        'limited_time_free_access': '限时免费使用',
        'step_1_title': '下载并安装 KooRender',
        'step_1_desc': '下载最新的 KooRender 软件包并根据向导完成安装。请确保您的系统满足最低要求（Windows 10+，支持3ds Max 2021-2026，V-Ray 4-7）。',
        'download_package_btn': '下载 KooRender 安装包',
        'step_2_title': '创建账号',
        'overseas_users_title': '海外用户',
        'overseas_users_desc': '在 Coohom 平台注册账号以使用 KooRender 服务',
        'register_coohom_btn': '前往 Coohom 注册',
        'chinese_users_title': '中国用户',
        'chinese_users_desc': '在酷家乐平台注册账号以使用 KooRender 服务',
        'register_kujiale_btn': '前往酷家乐注册',
        'already_have_account': '已有账号？跳至第三步，使用现有的 Coohom/酷家乐账号登录。',
        'step_3_title': '启动并开始渲染',
        'step_3_step_1': '启动您的 3ds Max 软件',
        'step_3_step_2': '从 3ds Max 插件菜单中找到并打开 KooRender 插件',
        'step_3_step_3': '使用您的 Coohom/酷家乐账号凭据登录',
        'step_3_step_4': '免费开始使用实时渲染和离线渲染功能',
        'limited_time_free_trial_title': '限时免费试用',
        'limited_time_free_trial_desc': '目前，KooRender 的所有功能（实时渲染和离线渲染）在试用期内均可免费使用。无需任何费用即可享受高质量云端渲染！',
        'need_help_title': '需要帮助？',
        'need_help_desc': '如果在设置过程中遇到任何问题，请查看我们的文档或联系支持团队。',
        'view_documentation_btn': '查看文档',
        'contact_support_btn': '联系支持',
        'why_choose_koorender_title': '为什么选择 <span class="text-primary">KooRender</span> 实时云渲染',
        'why_choose_koorender_desc': 'KooRender 通过尖端的云原生架构重新定义 3D 渲染工作流，提供突破本地硬件限制的实时交互式渲染能力。',
        'core_tech_title': '核心技术架构优势',
        'core_tech_desc': '基于分布式云架构，KooRender 通过创新的技术设计解决传统渲染工作流的痛点。',
        'realtime_cloud_rendering_title': '云端实时交互式渲染',
        'realtime_cloud_rendering_desc': '将传统的“调整-等待-评估”周期缩短至秒级，实现真正的迭代式设计思维。',
        'target_latency_title': '目标延迟 < 2 秒',
        'target_latency_desc': '为设计调整提供近乎即时的反馈',
        'distributed_gpu_title': '分布式 GPU 集群扩展',
        'distributed_gpu_desc': '根据任务复杂度动态扩展计算资源',
        'incremental_sync_title': '增量同步机制',
        'incremental_sync_desc': '仅同步变化的元素，减少数据传输量',
        'hardware_independence_title': '本地硬件独立性',
        'hardware_independence_desc': '将高端工作站的固定成本转换为灵活的订阅模式（限时免费），消除硬件投资壁垒。',
        'network_requirement_title': '基础网络要求 (50Mbps+)',
        'network_requirement_desc': '在任何拥有标准宽带连接的设备上均可使用',
        'productivity_on_any_device_title': '任何设备上的完整生产力',
        'productivity_on_any_device_desc': '通过笔记本电脑、平板电脑或台式机访问完整的渲染能力',
        'on_demand_computing_title': '10 倍以上按需算力',
        'on_demand_computing_desc': '在需要时可扩展至本地算力的 10 倍以上',
        'native_plugin_integration_title': '3ds Max 原生插件集成',
        'native_plugin_integration_desc': '3ds Max 是应用最广泛的 3D 创作工具，原生插件集成降低了用户的使用门槛。',
        'zero_learning_curve_title': '零学习曲线',
        'zero_learning_curve_desc': '无需额外培训，使用熟悉的 3ds Max 界面',
        'workflow_continuity_title': '工作流连续性',
        'workflow_continuity_desc': '无缝集成到现有的 3ds Max 工作流中',
        'synergy_effect_title': '生态协同效应',
        'synergy_effect_desc': '充分利用完整的 3ds Max 生态系统和资产库',
        'vray_compatibility_title': 'V-Ray 渲染器兼容性',
        'vray_compatibility_desc': '完全兼容广泛使用的 V-Ray 渲染器，消除迁移成本并保护现有的数字资产投资。',
        'consistent_results_title': '高度一致的渲染结果',
        'consistent_results_desc': '精确匹配 V-Ray 的渲染质量和视觉效果',
        'vray_full_feature_title': '全功能支持',
        'vray_full_feature_desc': '支持所有核心 V-Ray 功能和渲染参数',
        'distributed_vray_title': '无缝分布式渲染',
        'distributed_vray_desc': '内置分布式渲染架构，零配置',
        'differentiated_value_title': '差异化价值主张',
        'differentiated_value_desc': 'KooRender 提供传统本地渲染和其他云渲染解决方案无法比拟的独特价值。',
        'break_gpu_limit_title': '突破本地 GPU 限制',
        'break_gpu_limit_desc': '近乎无限的算力扩展，按需处理复杂的渲染任务，不再受本地 GPU 性能限制。',
        'iteration_efficiency_title': '实时迭代效率',
        'iteration_efficiency_desc': '显著提升设计过程效率，通过每次调整的即时反馈降低最终交付成本。',
        'flexible_cost_title': '弹性成本结构',
        'flexible_cost_desc': '按需付费模式（限时免费试用）使成本直接与价值创造挂钩，消除闲置硬件的浪费。',
        'vs_title': '传统本地渲染 vs KooRender 云渲染',
        'vs_aspect': '维度',
        'vs_traditional': '传统本地渲染',
        'vs_koorender': 'KooRender 云渲染',
        'vs_response_time': '响应时间',
        'vs_response_time_trad': '每次迭代需要几分钟到几小时',
        'vs_response_time_koo': '每次调整 < 2 秒',
        'vs_hardware_cost': '硬件成本',
        'vs_hardware_cost_trad': '高额前期投资（每台工作站 $10k+）',
        'vs_hardware_cost_koo': '灵活订阅（限时免费试用）',
        'vs_scalability': '可扩展性',
        'vs_scalability_trad': '受限于本地 GPU/CPU',
        'vs_scalability_koo': '无限按需扩展',
        'vs_workflow': '工作流',
        'vs_workflow_trad': '被中断的“调整-等待-评估”循环',
        'vs_workflow_koo': '无缝实时迭代'
    }
};

/**
 * 默认语言检测逻辑（切换页面时优先使用已保存的语言）
 */
function getDefaultLanguage() {
    // 优先级 1: 前端 localStorage，保证切换页面能记住
    const saved = localStorage.getItem(I18N_STORAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;

    // 优先级 2: 浏览器语言（navigator.languages 更可靠，支持多偏好）
    const langs = navigator.languages || [navigator.language || navigator.userLanguage];
    for (let i = 0; i < langs.length; i++) {
        const code = (langs[i] || '').toLowerCase();
        if (code.startsWith('zh')) return 'zh';
        if (code.startsWith('en')) return 'en';
    }

    // 优先级 3: 时区检测
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        const chineseZones = ['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Urumqi', 'Asia/Harbin', 'Asia/Hong_Kong', 'Asia/Macau', 'Asia/Taipei'];
        if (chineseZones.some(zone => tz.indexOf(zone) !== -1)) return 'zh';
    } catch (e) { /* ignore */ }

    // 默认: 英文
    return 'en';
}

let currentLang = getDefaultLanguage();

/**
 * 更新页面翻译
 */
function updatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            // 如果包含 HTML 标签，使用 innerHTML，否则使用 textContent
            const content = translations[currentLang][key];
            if (content.includes('<')) {
                el.innerHTML = content;
            } else {
                el.textContent = content;
            }
        }
    });

    // 更新 html 标签的 lang 属性
    document.documentElement.lang = currentLang;

    // 更新切换按钮显示
    const langBtns = document.querySelectorAll('.lang-current-text');
    langBtns.forEach(btn => {
        btn.textContent = currentLang === 'en' ? 'English' : '中文';
    });
}

/**
 * 设置语言
 * @param {string} lang 语言代码 ('en' 或 'zh')
 */
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'zh') return;
    currentLang = lang;
    localStorage.setItem(I18N_STORAGE_KEY, currentLang);
    updatePage();
    
    // 关闭下拉菜单（如果有）
    const dropdowns = document.querySelectorAll('.lang-dropdown-menu');
    dropdowns.forEach(menu => menu.classList.add('hidden'));
}

/**
 * 切换下拉菜单显示状态
 */
function toggleLangDropdown(event) {
    if (event) event.stopPropagation();
    const menu = event.currentTarget.nextElementSibling;
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// 点击页面其他地方关闭下拉菜单
document.addEventListener('click', () => {
    const dropdowns = document.querySelectorAll('.lang-dropdown-menu');
    dropdowns.forEach(menu => menu.classList.add('hidden'));
});

/**
 * 切换语言（保留旧版兼容性）
 */
function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'zh' : 'en';
    setLanguage(nextLang);
}

// 页面加载完成后：从 localStorage 同步语言并应用，保证切换页面能记住
function applyStoredLanguageAndUpdate() {
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') {
        currentLang = stored;
    }
    updatePage();
}

document.addEventListener('DOMContentLoaded', applyStoredLanguageAndUpdate);

// 若脚本在 DOM 就绪之后才执行（如 defer/动态加载），DOMContentLoaded 已触发过，需立即执行一次
if (document.readyState !== 'loading') {
    applyStoredLanguageAndUpdate();
}

// 暴露给全局以便在 HTML 中调用
window.toggleLanguage = toggleLanguage;
window.setLanguage = setLanguage;
window.toggleLangDropdown = toggleLangDropdown;
